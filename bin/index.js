"use strict";

require("core-js/modules/es.symbol");

require("core-js/modules/es.array.filter");

require("core-js/modules/es.array.for-each");

require("core-js/modules/es.object.get-own-property-descriptors");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getSimpleStates = exports.getSimpleState = exports.useSimpleDispatch = exports.useSimpleSelector = exports.SimpleProvider = exports.store = void 0;

var _react = _interopRequireDefault(require("react"));

var _redux = require("redux");

var _reactRedux = require("react-redux");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var getRootReducer = function getRootReducer(initialState) {
  return function () {
    var state = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : initialState;
    var action = arguments.length > 1 ? arguments[1] : undefined;

    if (action.type) {
      return _objectSpread(_objectSpread({}, state), {}, {
        [action.type]: action[action.type]
      });
    }

    return state;
  };
};

var store;
exports.store = store;

var createSimpleStore = function createSimpleStore(initialState) {
  var nstore = (0, _redux.createStore)(getRootReducer(initialState));
  exports.store = store = nstore;
  return nstore;
};

var SimpleProvider = function SimpleProvider(props) {
  return /*#__PURE__*/_react.default.createElement(_reactRedux.Provider, {
    store: createSimpleStore(props.initialState)
  }, props.children);
};

exports.SimpleProvider = SimpleProvider;

var useSimpleSelector = function useSimpleSelector(property) {
  return (0, _reactRedux.useSelector)(function (state) {
    return state[property];
  });
};

exports.useSimpleSelector = useSimpleSelector;

var useSimpleDispatch = function useSimpleDispatch() {
  var dispatch = (0, _reactRedux.useDispatch)();
  return function (property, value) {
    return dispatch({
      type: property,
      [property]: value
    });
  };
};

exports.useSimpleDispatch = useSimpleDispatch;

var getSimpleState = function getSimpleState(property) {
  return store.getState()[property];
};

exports.getSimpleState = getSimpleState;

var getSimpleStates = function getSimpleStates() {
  return store.getState();
};

exports.getSimpleStates = getSimpleStates;