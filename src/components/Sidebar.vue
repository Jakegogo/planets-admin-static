<template>
  <div class="col-md-3 left_col menu_fixed">
    <div class="left_col scroll-view">
      <div class="navbar nav_title" style="border: 0;">
        <a href="index.html" class="site_title"> <span>管理系统</span></a>
      </div>

      <div class="clearfix"></div>

      <!-- menu profile quick info -->
      <div class="profile">
        <div class="profile_pic">
          <img src="../assets/images/icon_avatar.svg"/>
        </div>
        <div class="profile_info">
          <h2><span>欢迎回来, </span> 老大</h2>
        </div>
      </div>
      <div class="clearfix"></div>

      <!-- sidebar menu -->
      <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
        <div class="menu_section">
          <br/>
          <h2>通用设置</h2>
          <br/>
          <ul class="nav side-menu">
            <!-- 一级菜单 -->
            <!--通过v-for来进行菜单列表的显示，并绑定v-on:click事件进行点击控制-->
            <li v-for="menu in menus"
                v-on:click="toggleMenu(menu)"
                v-bind:class="menu.class">
              <!--class的绑定需要使用v-bind:class来实现-->
              <a><i class="fa" v-bind:class="menu.icon"></i> {{menu.text}}
                <span class="fa" v-show="!menu.href"
                      v-bind:class="menu.class ? 'fa-chevron-down' : 'fa-chevron-right'">
                </span>
              </a>

              <!-- 二级菜单 -->
              <!--通过判断class是否active来进行显示和隐藏的控制-->
              <ul class="nav child_menu slide" v-on:click.stop v-show="menu.class">
                <!-- 绑定三级菜单展开的点击事件 -->
                <li v-for="childMenu in menu.childMenus"
                    v-bind:key="childMenu.text"
                    class="slide-item"
                    active-class="current-page"
                    v-on:click="toggleMenu(childMenu)">

                  <router-link :to="childMenu.href"
                                v-bind:class="childMenu.class"
                               v-if="!childMenu.childMenus">
                    <i class="fa" v-bind:class="childMenu.icon" v-if="childMenu.icon"></i>
                    {{ childMenu.text }}
                  </router-link>

                  <a v-if="childMenu.childMenus">
                    <i class="fa" v-bind:class="childMenu.icon" v-if="childMenu.icon"></i>
                    {{ childMenu.text }}
                    <span class="fa fa-chevron-down"></span>
                  </a>

                  <!-- 三级菜单 -->
                  <ul class="nav child_menu"
                      v-if="childMenu.childMenus"
                      v-on:click.stop
                      v-show="childMenu.class">
                    <router-link v-for="subChildMenu in childMenu.childMenus"
                                 v-bind:key="subChildMenu.text"
                                 class="slide-item"
                                 :to="subChildMenu.href" tag="li"
                                 active-class="current-page">
                      <a>
                        <i class="fa" v-bind:class="subChildMenu.icon" v-if="subChildMenu.icon"></i>
                        {{ subChildMenu.text }}
                      </a>
                    </router-link>
                  </ul>

                </li>
              </ul>
            </li>
          </ul>
        </div>
      </div>
      <!-- /sidebar menu -->
    </div>
  </div>
</template>


<script>
  export default {
    data() {
      return {
        menus: [{
          icon: 'fa-home', // icon用于储存菜单对应的图标
          text: '服务管理', // text用于储存该菜单显示名称
          class: '',
          childMenus: [{
            icon: 'fa-dashboard',
            href: '/app/services', // href用于设定该菜单跳转路由
            text: '服务信息' // text用于储存该菜单显示名称
          }, {
            icon: 'fa-file-code-o',
            href: '/app/add/service', // href用于设定该菜单跳转路由
            text: '服务配置' // text用于储存该菜单显示名称
          }]
        }, {
          icon: 'fa-bar-chart',
          text: '运营管理',
          class: '',
          childMenus: [{
            icon: 'fa-binoculars',
            text: '报表分析',
            class: '',
            // 三级菜单
            childMenus: [
              {
                icon: 'fa-area-chart',
                href: '/app/promote',
                text: '注册分析'
              },
              {
                icon: 'fa-star',
                href: '/app/promote',
                text: '留存分析'
              },
              {
                icon: 'fa-square-o',
                href: '/app/promote',
                text: '流失分析'
              },
              {
                icon: 'fa-pie-chart',
                href: '/app/promote',
                text: '付费分析'
              },
              {
                icon: 'fa-cc-visa',
                href: '/app/promote',
                text: '消费分析'
              },
              {
                icon: 'fa-line-chart',
                href: '/app/promote',
                text: '等级分布'
              },
              {
                icon: 'fa-bitcoin',
                href: '/app/promote',
                text: '产出分析'
              },
              {
                icon: ' fa-shekel',
                href: '/app/promote',
                text: '物品分析'
              }
            ]
          }, {
            icon: 'fa-database',
            href: '/app/add/promote',
            text: '数据配置'
          }, {
            icon: 'fa-upload',
            href: '/app/add/promote',
            text: '上传文件'
          }]
        }, {
          icon: 'fa-rocket',
          text: '产品管理',
          class: '',
          childMenus: [{
            icon: 'fa-caret-square-o-right',
            href: '/app/products',
            text: '产品设置'
          }]
        }, {
          icon: 'fa-file-text-o',
          text: '日志管理',
          class: '',
          childMenus: [{
            href: '/app/promote',
            text: '日志查询'
          }, {
            href: '/app/promote',
            text: '报表配置'
          }, {
            href: '/app/add/promote',
            text: '告警配置'
          }]
        }],
        menuShowAll: true,
        post: null,
        error: null
      }
    },
    // 在 `methods` 对象中定义方法
    methods: {
      toggleMenu(menu) {
        // 当菜单有href属性时，代表其将进行路由跳转而不是展开收起子菜单
        // 此时将其余菜单收起
        if (menu.href) {
          this.$router.push(menu.href);
          // menus.forEach(item => {
          //   item.class = '';
          // });
          menu.class = 'active';
          return;
        }
        // 其他时候默认进行子菜单的切换
        switch (menu.class) {
          case 'active':
            menu.class = '';
            break;
          case '':
            menu.class = 'active';
        }
      }
    }
  }
</script>

<style lang="scss">
  .fa-home {
    font-size: 20px !important;
  }

  .nav-sm .fa-home {
    font-size: 32px !important;
  }

  ul {
    padding: 0;
  }
  #sidebar-menu {
    height: 90%;
    /*overflow-y: auto;*/
  }
  /* for Chrome */
  #sidebar-menu::-webkit-scrollbar {
    display: none;
  }
  .profile_pic {
    text-align: right;
    box-sizing: border-box;
    height: 100%;

    img {
      width: 60%;
    }
  }
</style>
