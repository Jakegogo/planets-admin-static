<template>
  <div class="container body">
    <div class="main_container">
      <!--使用Sidebar组件-->
      <Sidebar></Sidebar>

      <div class="top_nav">
        <div class="nav_menu">
          <nav>
            <div class="nav toggle">
              <a id="menu_toggle"  v-on:click="toggleNav()"><i class="fa fa-bars"></i></a>
            </div>

            <ul class="nav navbar-nav navbar-right">
              <li class="">
                <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown"
                   aria-expanded="false">
                  <img src="images/img.jpg" alt="">John Doe
                  <span class=" fa fa-angle-down"></span>
                </a>
                <ul class="dropdown-menu dropdown-usermenu pull-right">
                  <li><a href="javascript:;"> Profile</a></li>
                  <li>
                    <a href="javascript:;">
                      <span class="badge bg-red pull-right">50%</span>
                      <span>设置</span>
                    </a>
                  </li>
                  <li><a href="javascript:;">帮助</a></li>
                  <li><a href="login.html"><i class="fa fa-sign-out pull-right"></i> 推出</a></li>
                </ul>
              </li>

              <li role="presentation" class="dropdown">
                <a href="javascript:;" class="dropdown-toggle info-number" data-toggle="dropdown" aria-expanded="false">
                  <i class="fa fa-envelope-o"></i>
                  <span class="badge bg-green">6</span>
                </a>
                <ul id="menu1" class="dropdown-menu list-unstyled msg_list" role="menu">
                  <li>
                    <a>
                      <span class="image"><img src="images/img.jpg" alt="Profile Image"></span>
                      <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                      <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="image"><img src="images/img.jpg" alt="Profile Image"></span>
                      <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                      <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="image"><img src="images/img.jpg" alt="Profile Image"></span>
                      <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                      <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                    </a>
                  </li>
                  <li>
                    <a>
                      <span class="image"><img src="images/img.jpg" alt="Profile Image"></span>
                      <span>
                          <span>John Smith</span>
                          <span class="time">3 mins ago</span>
                        </span>
                      <span class="message">
                          Film festivals used to be do-or-die moments for movie makers. They were where...
                        </span>
                    </a>
                  </li>
                  <li>
                    <div class="text-center">
                      <a>
                        <strong>See All Alerts</strong>
                        <i class="fa fa-angle-right"></i>
                      </a>
                    </div>
                  </li>
                </ul>
              </li>
            </ul>
          </nav>
        </div>
      </div>

      <!-- page content -->
      <div class="right_col" role="main">
        <router-view></router-view>
      </div>
    </div>
  </div>
</template>

<script>
  import Sidebar from './components/Sidebar'


  export default {
    name: 'App',
    components: {
      Sidebar
    },
    created() {
      $('body').attr('class', 'nav-md');
    },
    mounted() {
      $('.right_col').css('min-height', $(window).height());
    },
    methods: {
      toggleNav: function () {
        const $BODY = $('body');
        const $SIDEBAR_MENU = $('#sidebar-menu');
        if ($BODY.hasClass('nav-md')) {
          $SIDEBAR_MENU.find('li.active ul').hide();
          $SIDEBAR_MENU.find('li.active').addClass('active-sm').removeClass('active');
        } else {
          $SIDEBAR_MENU.find('li.active-sm ul').show();
          $SIDEBAR_MENU.find('li.active-sm').addClass('active').removeClass('active-sm');
        }

        $BODY.toggleClass('nav-md nav-sm');
      }
    }
  }
</script>

<style>

</style>
