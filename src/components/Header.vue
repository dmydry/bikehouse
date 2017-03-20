<template>
  <div class="header-menu">
    <b-navbar toggleable type="inverse" variant="inverse">

      <b-nav-toggle target="nav_collapse"/>

      <b-link class="navbar-brand" to="/">
        <span>{{title}}</span>
      </b-link>

      <b-collapse is-nav id="nav_collapse">
        <b-nav is-nav-bar>
          <b-nav-item href='/support' class="nav-link">{{menu.support}}</b-nav-item>
          <b-nav-item href='/docs' class="nav-link">{{menu.docs}}</b-nav-item>
          <b-nav-item href='/#contact' class="nav-link">Contact Us</b-nav-item>

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
