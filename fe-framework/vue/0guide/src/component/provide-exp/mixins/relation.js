import { sortChildren } from '../utils/vnodes';

export function ParentMixin(Parent) {
  return {
    provide() {
      return {
        [Parent]: this,
      };
    },
    data() {
      return {
        children: [],
      };
    },
  };
}

export function ChildrenMixin(Parent, options = {}) {
  var indexKey = options.indexKey || 'index';
  return {
    inject: {
      [Parent]: {
        // 指定 alias, 默认同名
        // from: Parent,
        // 默认值
        default: null,
      },
    },
    computed: {
      parent() {
        if (this.disableBindRelation) {
          return null;
        }
        return this[Parent];
      },
      [indexKey]() {
        this.bindRelation();

        if (this.parent) {
          return this.parent.children.indexOf(this);
        }

        return null;
      },
    },
    watch: {
      disableBindRelation(val) {
        if (!val) {
          this.bindRelation();
        }
      },
    },
    mounted() {
      this.bindRelation();
    },
    beforeDestroy() {
      var _this = this;

      if (this.parent) {
        this.parent.children = this.parent.children.filter(function(item) {
          return item !== _this;
        });
      }
    },
    methods: {
      bindRelation() {
        if (!this.parent || this.parent.children.indexOf(this) !== -1) {
          return;
        }

        var children = [].concat(this.parent.children, [this]);
        sortChildren(children, this.parent);
        this.parent.children = children;
      },
    },
  };
}
