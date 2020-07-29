<template>
  <v-app>
    <v-main>
      <v-container
        class="fill-height"
        fluid
      >
        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="12"
            md="4"
          >
            <v-card class="elevation-12">
              <v-toolbar
                color="grey-darken-3"
                dark
                flat
              >
                <v-spacer />
                <v-toolbar-title>
                  Team38 Platform
                </v-toolbar-title>
                <v-spacer />
              </v-toolbar>
              <v-card-text>
                <v-form>
                  <v-text-field
                    label="correo electrónico"
                    name="correo electrónico"
                    prepend-icon="mdi-account"
                    type="email"
                    @keyup="onValidate()"
                    color="white"
                  />

                  <v-text-field
                    label="contraseña"
                    name="password"
                    prepend-icon="mdi-lock"
                    type="password"
                    color="white"
                  />
                  <v-row>
                    <v-col class="text-center">
                      <v-btn
                        :large=true
                        :rounded=true
                      >
                        iniciar sesión
                      </v-btn>
                    </v-col>
                  </v-row>
                </v-form>
              </v-card-text>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import Vue from 'vue';
import Compoent from 'vue-class-component';
import Component from 'vue-class-component';

@Component({})
class Signin extends Vue {

}

export default Signin;
</script>
