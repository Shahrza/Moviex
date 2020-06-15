<template>
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
                            <input v-model.lazy="$v.form.email.$model" type="text" class="form-control" id="username"
                                   placeholder="Username">
                            <div v-if="$v.form.password.$error">
                                <div class="form-error" v-if="!$v.form.email.required"
                                     v-text="'Please enter your email'"></div>
                                <div class="form-error" v-if="!$v.form.email.email"
                                     v-text="'Email is not valid'"></div>
                            </div>
                        </div>
                        <div class="form-group">
                            <input v-model.lazy="$v.form.password.$model" type="password" class="form-control" id="password"
                                   placeholder="Password">
                            <div v-if="$v.form.password.$error">
                                <div class="form-error" v-if="!$v.form.password.required"
                                     v-text="'Please enter your password'"></div>
                            </div>

                        </div>
                        <div class="form-group">
                            <button type="submit" class="btn btn-green-pro btn-display-block">Sign In</button>
                        </div>
                    </form>

                </div><!-- close .registration-social-login-container -->

            </div><!-- close .modal-body -->

            <router-link to="/register"  class="not-a-member-pro">Not a member?
                <span>Join Today!</span></router-link>
        </div><!-- close .modal-content -->
    </div><!-- close .modal-dialog -->
</template>

<script>
    import Swal from 'sweetalert2'
    import {required, email} from 'vuelidate/lib/validators'

    export default {
        name: "login",
        data() {
            return {
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
                    if (this.form.email === 'admin@admin.com' && this.form.password === '1') {
                        if (!localStorage.token) {
                            localStorage.token = (Math.random() * 10);
                            window.location.reload();
                        }
                    } else {
                        Swal.fire({
                            icon: 'error',
                            title: 'Oops...',
                            text: 'Password is not correct',
                        })
                    }
                }
            }
        }
    }
</script>

<style scoped>

</style>
