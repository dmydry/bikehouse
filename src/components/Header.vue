<template>
  <div class="header-menu">
    <b-navbar toggleable type="inverse" variant="inverse">

      <b-nav-toggle target="nav_collapse"/>

      <a class="navbar-brand" style="color:white" to="/">
        <span><router-link to="/" class="navbar-brand">{{title}}</router-link></span>
      </a>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item><router-link to="support" class="nav-link">{{menu.support}}</router-link></b-nav-item>
          <b-nav-item><router-link to="docs" class="nav-link">{{menu.docs}}</router-link></b-nav-item>
          <b-nav-item>
            <a v-if="$route.path === '/'" href="#contact" class="nav-link">{{menu.contact}}</a>
            <a v-else href="/#contact" class="nav-link">{{menu.contact}}</a>
          </b-nav-item>
        </b-nav>
        <b-nav is-nav-bar class="ml-auto">
          <b-nav-item-dropdown :text="menu.lang" right-alignment class="nav-link">
            <a href class="dropdown-item active">
              EN
            </a>
            <a href class="dropdown-item">
              ES
            </a>
          </b-nav-item-dropdown>
          <b-nav-item-dropdown right-alignment class="nav-link">
            <template slot="text">
              <span style="font-weight: bold;">{{menu.user}}</span>
            </template>
            <a href class="dropdown-item">
              Profile
            </a>
            <a href class="dropdown-item">
              Sign out
            </a>
          </b-nav-item-dropdown>
        </b-nav>
      </b-collapse>

    </b-navbar>
  </div>
</template>

<script>
  export default {
    name: 'header-menu',
    data() {
      return {
        title: 'BikeHouse',
        menu: {
          support: 'Support',
          docs: 'Docs',
          contact: 'Contact Us',
          lang: 'Lang',
          user: 'User',
        },
      };
    },
  };
</script>
