<template>
    <div class="container">
        <div class="registration-steps-page-container">

            <form @submit.prevent="signUp" class="registration-steps-form">

                <div class="registration-social-login-container">

                    <div class="form-group">
                        <label for="full-name" class="col-form-label">Full Name</label>
                        <input v-model="$v.form.fullName.$model" type="text" class="form-control" id="full-name"
                               placeholder="John Doe">
                        <div v-if="$v.form.fullName.$error">
                            <div class="form-error" v-if="!$v.form.fullName.required"
                                 v-text="'Please enter your name'"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-form-label">Email</label>
                        <input v-model="$v.form.email.$model" type="text" class="form-control" id="email"
                               placeholder="jondoe@gmail.com">
                        <div v-if="$v.form.email.$error">
                            <div class="form-error" v-if="!$v.form.email.required" v-text="'Please enter email'"></div>
                            <div class="form-error" v-else-if="!$v.form.email.email"
                                 v-text="'Email is not valid'"></div>
                        </div>
                    </div>

                    <div class="form-group">
                        <div class="row">
                            <div class="col">
                                <label for="password" class="col-form-label">Password</label>
                                <input v-model="$v.form.password.$model" type="password" class="form-control"
                                       id="password" placeholder="Enter password">
                                <div v-if="$v.form.password.$error">
                                    <div class="form-error" v-if="!$v.form.password.required"
                                         v-text="'Please enter password'"></div>
                                </div>
                            </div>

                            <div class="col">
                                <label for="confirm-password" class="col-form-label">&nbsp;</label>
                                <input v-model="$v.form.confirmPassword.$model" type="password" class="form-control"
                                       id="confirm-password" placeholder="Confirm Password">
                                <div v-if="$v.form.confirmPassword.$error">
                                    <div class="form-error" v-if="!$v.form.confirmPassword.required"
                                         v-text="'Please enter confirm password'"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- close .registration-social-login-container -->
                <div class="form-group last-form-group-continue">
                    <button class="btn btn-green-pro">Continue</button>
                    <span class="checkbox-remember-pro">
                        <input type="checkbox" id="checkbox-terms"><label for="checkbox-terms" class="col-form-label">By clicking "Continue", you agree to our <a
                        href="#!">Terms of Use</a> and
                    <a href="#!">Privacy Policy</a> including the use of cookies.</label></span>
                    <div class="clearfix"></div>
                </div>
            </form>

        </div>

    </div>
</template>

<script>
    import {required, email, minLength, sameAs} from 'vuelidate/lib/validators'

    export default {
        name: "register",
        data() {
            return {
                form: {
                    fullName: '',
                    password: '',
                    confirmPassword: ''
                }

            }
        },
        validations: {
            form: {
                fullName: {
                    required,
                },
                email: {
                    required, email
                },
                password: {
                    required,
                    minLength: minLength(6)
                },
                confirmPassword: {
                    required,
                    sameAs: sameAs('password')
                }
            }
        },
        methods: {
            signUp() {
                console.log(this.form)
                this.$v.form.$touch();
                if (!this.$v.form.$invalid) {
                    localStorage.token = Math.random()
                    this.$router.push({ path: '/' })
                }
            }
        }
    }
</script>

<style scoped>

</style>
