import chai from 'chai';
const expect = chai.expect;
import sinonChai from 'sinon-chai';
import sinon from 'sinon';
import Vue from 'vue';
import FormlyField from 'src/components/FormlyField.vue';
chai.use(sinonChai);

let el, vm;

function createForm(template, data){
    el = document.createElement('div');
    el.innerHTML = template;
    vm = new Vue({
        el: el,
        data: data,
        components: {
            'formly-field': FormlyField
        }
    });

    return [el, vm];
}

describe('FormlyField', () => {

    it('should take on the type of another component', () => {

        Vue.component('test', {
            template: '<div id="testComponent">Hello World</div>'
        });

        let data = {
            schema:{
                type: 'test'
            }
        };
        
        createForm('<formly-field :field="schema"></formly-field>', data);

        let innerElem = vm.$el.querySelector('#testComponent');

        expect(innerElem.textContent).to.contain('Hello World');
        
    });

    it('should mimic the model of the parent', (done) => {

        Vue.component('test', {
            props: ['model'],
            template: '<input type="text" id="testInput" v-model="model">'
        });

        let data = {
            schema: {
                type: 'test'
            },
            testModel: 'foo'
        };

        createForm('<formly-field :field="schema" :model.sync="testModel"></formly-field>', data);

        let input = vm.$el.querySelector('#testInput');

        expect(input.value).to.contain('foo');

        //change the value and expect a change
        vm.testModel = 'bar';

        setTimeout(() => {
            expect(input.value).to.equal('bar');
            done();
        }, 0);
        
    });
    
});