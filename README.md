# ----- Vue Formly has Moved ------

This is now being maintained over at [Formly JS](https://github.com/formly-js/vue-formly) so head on over there for future updates, especially for Vue 2.0 support which is coming very soon.

# Vue Formly

Vue Formly is a JS based form builder heavily inspired by [Angular Formly](http://angular-formly.com/). Vue Formly was designed to provide an easy way to keep your forms consistent and to remove bloat from your code. As there's no "one way" to design your forms, Vue Formly allows you to create custom input types which you can use in your form schemas. Vue Formly itself does not come with any inputs pre-loaded but a set of Bootsrap form inputs can be installed over at [Vue Formly Bootstrap](https://github.com/matt-sanders/vue-formly-bootstrap).

*NOTE*
Not currently compatible with Vue 2.0. But it's on the list...

## Installation
```
npm install vue-formly
```
Or via a script
```html
<script src="your_dir/vue-formly/vue-formly.min.js"></script>
```
## Usage
Take a look at the [docs](https://www.gitbook.com/book/matt-sanders/vue-formly/details) for extended information about using Formly and creating custom input types. But here is a quick example:
```html
<div id="app">
   <form @submit="handleSubmission">
      <formly-form :form="form"></formly-form>
      <button>Submit</button>
   </form>
</div>
```
```js
new Vue({
   el: '#app',
   data: {
      form: {
         name: {
            type: 'input',
            required: true
         },
         email: {
            type: 'input',
            inputType: 'email',
            required: true,
            validators: {
               validEmail: checkEmailFunction
            }
         },
         password: {
            type: 'input',
            inputType: 'password',
            required: true,
            validators: {
               validPassword: checkPasswordFunction
            }
         }
      }
   }
});
```

## To Do
* [x] Implement validation
* [x] Better error handling
* [x] Simplified data access
* [ ] Implement Vue 2.0 compatibility
