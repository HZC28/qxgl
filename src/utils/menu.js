let menus=[
    {
      menuid: 3,
      icon: 'li-icon-xiangmuguanli',
      menuname: '基础管理',
      hasThird: null,
      url: null,
      show:true,
      menus: [
        {
          menuid: 31,
          icon: 'icon-cat-skuQuery',
          menuname: '商品管理',
          hasThird: 'N',
          url: 'goods/Goods',
          menus: null
        }
      ]
    },
    {
      menuid: 2,
      icon: 'li-icon-dingdanguanli',
      menuname: '订单管理',
      hasThird: null,
      url: null,
      show:true,
      menus: [
        {
          menuid: 21,
          icon: 'icon-order-manage',
          menuname: '交易订单',
          hasThird: 'N',
          url: 'pay/Order',
          menus: null
        }
      ]
    },
    {
      menuid: 1,
      icon: 'li-icon-xitongguanli',
      menuname: '系统管理',
      hasThird: null,
      url: null,
      show:true,
      menus: [
        {
          menuid: 11,
          icon: 'icon-cus-manage',
          menuname: '用户管理',
          hasThird: 'N',
          url: 'system/user',
          menus: null
        },
        {
          menuid: 12,
          icon: 'icon-cms-manage',
          menuname: '菜单管理',
          hasThird: 'N',
          url: 'system/Module',
          menus: null
        },
        {
          menuid: 13,
          icon: 'icon-news-manage',
          menuname: '角色管理',
          hasThird: 'N',
          url: 'system/Role',
          menus: null
        },
        {
          menuid: 14,
          icon: 'icon-cs-manage',
          menuname: '公司管理',
          hasThird: 'N',
          url: 'system/Dept',
          menus: null
        },
        {
          menuid: 15,
          icon: 'icon-promotion-manage',
          menuname: '系统环境变量',
          hasThird: 'N',
          url: 'system/Variable',
          menus: null
        },
        {
          menuid: 16,
          icon: 'icon-cms-manage',
          menuname: '权限管理',
          hasThird: 'N',
          url: 'system/Permission',
          menus: null
        }
      ]
    },
    {
      menuid: 4,
      icon: 'li-icon-shangchengxitongtubiaozitihuayuanwenjian91',
      menuname: '支付管理',
      hasThird: null,
      url: null,
      show:false,
      menus: [
        {
          menuid: 41,
          icon: 'icon-provider-manage',
          menuname: '支付配置信息',
          hasThird: 'N',
          url: 'machine/MachineConfig',
          menus: null
        },
        {
          menuid: 42,
          icon: 'icon-provider-manage',
          menuname: '支付配置',
          hasThird: 'N',
          url: 'pay/Config',
          menus: null
        }
      ]
    }
  ]
  export default menus