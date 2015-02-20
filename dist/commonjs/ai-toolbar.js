System.register(["aurelia-templating", "./ai-element"], function (_export) {
  "use strict";

  var Behavior, AiElement, _inherits, _prototypeProperties, _classCallCheck, defaults, AiToolbar, ToolbarContainer;
  return {
    setters: [function (_aureliaTemplating) {
      Behavior = _aureliaTemplating.Behavior;
    }, function (_aiElement) {
      AiElement = _aiElement.AiElement;
    }],
    execute: function () {
      _inherits = function (subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) subClass.__proto__ = superClass; };

      _prototypeProperties = function (child, staticProps, instanceProps) { if (staticProps) Object.defineProperties(child, staticProps); if (instanceProps) Object.defineProperties(child.prototype, instanceProps); };

      _classCallCheck = function (instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } };

      defaults = { size: "sm",
        fixed: true,
        bgColor: "white",
        textColor: "purple",
        brand: "brand"
      };
      AiToolbar = _export("AiToolbar", (function () {
        function AiToolbar(element) {
          _classCallCheck(this, AiToolbar);

          var _this = this;
          this.element = element;
          this.current = defaults;

          _.assign(this, this.current);

          this.pre = function (prefix) {
            var args = Array.prototype.slice.call(arguments).slice(1);
            return _.map(args, function (arg, index) {
              return "" + prefix + "-" + arg;
            });
          };
        }

        _prototypeProperties(AiToolbar, {
          metadata: {
            value: function metadata() {
              return Behavior.customElement("ai-toolbar").withProperty("router").withProperty("fixed").withProperty("brand", "brandChanged").withProperty("bgColor", "bgChanged").withProperty("textColor", "textChanged").withProperty("size", "sizeChanged");
            },
            writable: true,
            configurable: true
          },
          inject: {
            value: function inject() {
              return [Element];
            },
            writable: true,
            configurable: true
          }
        }, {
          bind: {
            value: function bind() {
              var classList = ["ai-toolbar"];
              var _this = this;
              this.container = new ToolbarContainer(this.element.firstElementChild);

              console.log(this.container);

              this.fixed && classList.push("toolbar-fixed");
              this.bgColor && classList.push(this.bgColor);
              this.textColor && classList.push(this.textColor);
              this.size && classList.push("toolbar-" + this.size);
              this.container.addClass(this.bgColor, this.textColor);

              this.addClass(classList);

              Object.observe(this.router, function () {
                _this.size = _this.router.currentInstruction.config.toolbar.size || defaults.size;
                _this.bgColor = _this.router.currentInstruction.config.toolbar.bgColor || defaults.bgColor;
                _this.textColor = _this.router.currentInstruction.config.toolbar.textColor || defaults.textColor;
              });
            },
            writable: true,
            configurable: true
          },
          bgChanged: {
            value: function bgChanged(value) {
              if (value === this.current.bgColor) {
                return;
              }
              this.container.removeClass(this.current.bgColor);
              this.container.addClass(this.bgColor);
              this.current.bgColor = value;
            },
            writable: true,
            configurable: true
          },
          textChanged: {
            value: function textChanged(value) {
              if (value === this.current.textColor) {
                return;
              }
              this.container.removeClass(this.current.textColor);
              this.container.addClass(this.textColor);
              this.current.textColor = value;
            },
            writable: true,
            configurable: true
          },
          sizeChanged: {
            value: function sizeChanged(value) {
              if (value === this.current.size) {
                return;
              }
              this.removeClass("toolbar-" + this.current.size);
              this.addClass("toolbar-" + value);
              this.current.size = value;
            },
            writable: true,
            configurable: true
          },
          addClass: {
            value: function addClass() {
              var args = _.flatten(arguments, true);
              console.log(args);
              this.element.classList.add.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          },
          removeClass: {
            value: function removeClass(array) {
              var args = Array.isArray(array) ? array : arguments;
              this.element.classList.removeClass.apply(this.element.classList, args);
            },
            writable: true,
            configurable: true
          }
        });

        return AiToolbar;
      })());
      ToolbarContainer = (function (AiElement) {
        function ToolbarContainer(element) {
          _classCallCheck(this, ToolbarContainer);

          this.element = element;
        }

        _inherits(ToolbarContainer, AiElement);

        return ToolbarContainer;
      })(AiElement);
    }
  };
});