<template>
    <div  tabindex="-1" role="dialog" aria-labelledby="LoginModal" aria-hidden="true">
        <button type="button" class="close float-close-pro" data-dismiss="modal" aria-label="Close">
            <span aria-hidden="true">&times;</span>
        </button>
        <div class="modal-dialog modal-dialog-centered modal-md" role="document">
            <div class="modal-content">
                <div class="modal-header-pro">
                    <h2>Welcome Back</h2>
                    <h6>Sign in to your account to continue using Moviex</h6>
                </div>
                <div class="modal-body-pro social-login-modal-body-pro">

                    <div class="registration-social-login-container">
                        <form @submit.prevent="signIn">
                            <div class="form-group">
                                <input v-model="$v.form.email.$model" type="text" class="form-control" id="username" placeholder="Username">
                                <div class="form-error" v-if="!$v.form.email.required"
                                     v-text="'Please enter your email'"></div>
                                <div class="form-error" v-if="!$v.form.email.email"
                                     v-text="'Email is not valid'"></div>
                            </div>
                            <div class="form-group">
                                <input v-model="$v.form.password.$model" type="password" class="form-control" id="password" placeholder="Password">
                                <div class="form-error" v-if="!$v.form.password.required"
                                     v-text="'Please enter your password'"></div>
                            </div>
                            <div class="form-group">
                                <button type="button" class="btn btn-green-pro btn-display-block">Sign In</button>
                            </div>
<!--                            <div class="container-fluid">-->
<!--                                <div class="row no-gutters">-->
<!--                                    <div class="col checkbox-remember-pro"><input type="checkbox" id="checkbox-remember"><label for="checkbox-remember" class="col-form-label">Remember me</label></div>-->
<!--                                    <div class="col forgot-your-password"><a href="#!">Forgot your password?</a></div>-->
<!--                                </div>-->
<!--                            </div>&lt;!&ndash; close .container-fluid &ndash;&gt;-->

                        </form>

                    </div><!-- close .registration-social-login-container -->

                </div><!-- close .modal-body -->

                <a class="not-a-member-pro" href="#!">Not a member? <span>Join Today!</span></a>
            </div><!-- close .modal-content -->
        </div><!-- close .modal-dialog -->
    </div><!-- close .modal -->

</template>

<script>
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: "login",
        data() {
            return {
                token: !localStorage.token,
                form: {
                    email: null,
                    password: null
                }
            }
        },
        validations: {
            form: {
                email: {required, email},
                password: {required}
            }
        },
        methods: {
            signIn() {
                this.$v.form.$touch();
                if (!this.$v.form.$invalid) {
                    if (this.form.email === 'admin@admin.com' && this.form.password === '123456') {
                        localStorage.token = Math.random();
                        window.location.reload();
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
