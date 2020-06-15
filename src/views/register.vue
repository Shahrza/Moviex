<template>
    <div style="display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center; padding-bottom: 100px;">
        <div class="registration-steps-page-container">

            <form @submit.prevent="signUp" class="registration-steps-form">

                <div class="registration-social-login-container">

                    <div class="form-group">
                        <label for="full-name" class="col-form-label">Full Name</label>
                        <input v-model.lazy="$v.form.fullName.$model" type="text" class="form-control" id="full-name"
                               placeholder="John Doe">
                        <div v-if="$v.form.fullName.$error">
                            <div class="form-error" v-if="!$v.form.fullName.required"
                                 v-text="'Please enter your name'"></div>
                        </div>
                    </div>
                    <div class="form-group">
                        <label for="email" class="col-form-label">Email</label>
                        <input v-model.lazy="$v.form.email.$model" type="text" class="form-control" id="email"
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
                                <input v-model.lazy="$v.form.password.$model" type="password" class="form-control"
                                       id="password" placeholder="Enter password">
                                <div v-if="$v.form.password.$error">
                                    <div class="form-error" v-if="!$v.form.password.required"
                                         v-text="'Please enter password'"></div>
                                </div>
                                <div v-if="$v.form.password.$error">
                                    <div class="form-error" v-if="!$v.form.password.minLength"
                                         v-text="'Password has to to be at least 6 character'"></div>
                                </div>
                            </div>

                            <div class="col">
                                <label for="confirm-password" class="col-form-label">&nbsp;</label>
                                <input v-model.lazy="$v.form.confirmPassword.$model" type="password" class="form-control"
                                       id="confirm-password" placeholder="Confirm Password">
                                <div v-if="$v.form.confirmPassword.$error">
                                    <div class="form-error" v-if="!$v.form.confirmPassword.required"
                                         v-text="'Please enter confirm password'"></div>
                                    <div class="form-error" v-if="!$v.form.confirmPassword.sameAs"
                                         v-text="'Password is not same'"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div><!-- close .registration-social-login-container -->
                <div class="form-group last-form-group-continue">
                    <button class="btn btn-green-pro">Continue</button>
                    <span style="margin:10px">Already have an account? <router-link to="/login"> Sign in </router-link></span>
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
                    email: '',
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
                this.$v.form.$touch();
                if (!this.$v.form.$invalid) {
                    localStorage.token = Math.random();
                    this.$router.push({path: '/'});
                    window.location.reload();
                } 
            }
        }
    }
</script>

<style scoped>

</style>
