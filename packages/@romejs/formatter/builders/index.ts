/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import {BuilderMethod} from "../Builder";

// rome-ignore lint/noExplicitAny
const builders: Map<string, BuilderMethod<any>> = new Map();

export default builders;

// EVERYTHING BELOW IS AUTOGENERATED. SEE SCRIPTS FOLDER FOR UPDATE SCRIPTS

import CommentBlock from "./common/comments/CommentBlock";
builders.set("CommentBlock", CommentBlock);

import CommentLine from "./common/comments/CommentLine";
builders.set("CommentLine", CommentLine);

import CSSAnglePercentageType from "./css/types/CSSAnglePercentageType";
builders.set("CSSAnglePercentageType", CSSAnglePercentageType);

import CSSAngleType from "./css/types/CSSAngleType";
builders.set("CSSAngleType", CSSAngleType);

import CSSBasicShapeType from "./css/types/CSSBasicShapeType";
builders.set("CSSBasicShapeType", CSSBasicShapeType);

import CSSBlendModeType from "./css/types/CSSBlendModeType";
builders.set("CSSBlendModeType", CSSBlendModeType);

import CSSCharSetAtStatement from "./css/at-rules/CSSCharSetAtStatement";
builders.set("CSSCharSetAtStatement", CSSCharSetAtStatement);

import CSSCounterStyleAtStatement from "./css/at-rules/CSSCounterStyleAtStatement";
builders.set("CSSCounterStyleAtStatement", CSSCounterStyleAtStatement);

import CSSDimensionType from "./css/types/CSSDimensionType";
builders.set("CSSDimensionType", CSSDimensionType);

import CSSDocumentAtStatement from "./css/at-rules/CSSDocumentAtStatement";
builders.set("CSSDocumentAtStatement", CSSDocumentAtStatement);

import CSSFontFaceAtStatement from "./css/at-rules/CSSFontFaceAtStatement";
builders.set("CSSFontFaceAtStatement", CSSFontFaceAtStatement);

import CSSFrequencyPercentageType from "./css/types/CSSFrequencyPercentageType";
builders.set("CSSFrequencyPercentageType", CSSFrequencyPercentageType);

import CSSFrequencyType from "./css/types/CSSFrequencyType";
builders.set("CSSFrequencyType", CSSFrequencyType);

import CSSGradientType from "./css/types/CSSGradientType";
builders.set("CSSGradientType", CSSGradientType);

import CSSIdentifierType from "./css/types/CSSIdentifierType";
builders.set("CSSIdentifierType", CSSIdentifierType);

import CSSImageType from "./css/types/CSSImageType";
builders.set("CSSImageType", CSSImageType);

import CSSImportAtStatement from "./css/at-rules/CSSImportAtStatement";
builders.set("CSSImportAtStatement", CSSImportAtStatement);

import CSSIntegerType from "./css/types/CSSIntegerType";
builders.set("CSSIntegerType", CSSIntegerType);

import CSSKeyframesAtStatement from "./css/at-rules/CSSKeyframesAtStatement";
builders.set("CSSKeyframesAtStatement", CSSKeyframesAtStatement);

import CSSKeyframesFromKeyword from "./css/keyframes/CSSKeyframesFromKeyword";
builders.set("CSSKeyframesFromKeyword", CSSKeyframesFromKeyword);

import CSSKeyframesRuleDeclaration from "./css/keyframes/CSSKeyframesRuleDeclaration";
builders.set("CSSKeyframesRuleDeclaration", CSSKeyframesRuleDeclaration);

import CSSKeyframesToKeyword from "./css/keyframes/CSSKeyframesToKeyword";
builders.set("CSSKeyframesToKeyword", CSSKeyframesToKeyword);

import CSSLengthPercentageType from "./css/types/CSSLengthPercentageType";
builders.set("CSSLengthPercentageType", CSSLengthPercentageType);

import CSSLengthType from "./css/types/CSSLengthType";
builders.set("CSSLengthType", CSSLengthType);

import CSSMediaAtStatement from "./css/at-rules/CSSMediaAtStatement";
builders.set("CSSMediaAtStatement", CSSMediaAtStatement);

import CSSNamespaceAtStatement from "./css/at-rules/CSSNamespaceAtStatement";
builders.set("CSSNamespaceAtStatement", CSSNamespaceAtStatement);

import CSSNumberType from "./css/types/CSSNumberType";
builders.set("CSSNumberType", CSSNumberType);

import CSSPageAtStatement from "./css/at-rules/CSSPageAtStatement";
builders.set("CSSPageAtStatement", CSSPageAtStatement);

import CSSPercentageType from "./css/types/CSSPercentageType";
builders.set("CSSPercentageType", CSSPercentageType);

import CSSRatioType from "./css/types/CSSRatioType";
builders.set("CSSRatioType", CSSRatioType);

import CSSResolutionType from "./css/types/CSSResolutionType";
builders.set("CSSResolutionType", CSSResolutionType);

import CSSRoot from "./css/core/CSSRoot";
builders.set("CSSRoot", CSSRoot);

import CSSRuleDeclaration from "./css/core/CSSRuleDeclaration";
builders.set("CSSRuleDeclaration", CSSRuleDeclaration);

import CSSRulesetStatement from "./css/core/CSSRulesetStatement";
builders.set("CSSRulesetStatement", CSSRulesetStatement);

import CSSSelectorAttribute from "./css/selectors/CSSSelectorAttribute";
builders.set("CSSSelectorAttribute", CSSSelectorAttribute);

import CSSSelectorChain from "./css/selectors/CSSSelectorChain";
builders.set("CSSSelectorChain", CSSSelectorChain);

import CSSSelectorClass from "./css/selectors/CSSSelectorClass";
builders.set("CSSSelectorClass", CSSSelectorClass);

import CSSSelectorCombinator from "./css/selectors/CSSSelectorCombinator";
builders.set("CSSSelectorCombinator", CSSSelectorCombinator);

import CSSSelectorId from "./css/selectors/CSSSelectorId";
builders.set("CSSSelectorId", CSSSelectorId);

import CSSSelectorPseudoClass from "./css/selectors/CSSSelectorPseudoClass";
builders.set("CSSSelectorPseudoClass", CSSSelectorPseudoClass);

import CSSSelectorPseudoElementSelector from "./css/selectors/CSSSelectorPseudoElementSelector";
builders.set(
	"CSSSelectorPseudoElementSelector",
	CSSSelectorPseudoElementSelector,
);

import CSSSelectorTag from "./css/selectors/CSSSelectorTag";
builders.set("CSSSelectorTag", CSSSelectorTag);

import CSSSelectorUniversal from "./css/selectors/CSSSelectorUniversal";
builders.set("CSSSelectorUniversal", CSSSelectorUniversal);

import CSSShapeType from "./css/types/CSSShapeType";
builders.set("CSSShapeType", CSSShapeType);

import CSSStringType from "./css/types/CSSStringType";
builders.set("CSSStringType", CSSStringType);

import CSSSupportsAtStatement from "./css/at-rules/CSSSupportsAtStatement";
builders.set("CSSSupportsAtStatement", CSSSupportsAtStatement);

import CSSTimePercentageType from "./css/types/CSSTimePercentageType";
builders.set("CSSTimePercentageType", CSSTimePercentageType);

import CSSTimeType from "./css/types/CSSTimeType";
builders.set("CSSTimeType", CSSTimeType);

import CSSTransformFunctionType from "./css/types/CSSTransformFunctionType";
builders.set("CSSTransformFunctionType", CSSTransformFunctionType);

import CSSURLType from "./css/types/CSSURLType";
builders.set("CSSURLType", CSSURLType);

import CSSViewportAtStatement from "./css/at-rules/CSSViewportAtStatement";
builders.set("CSSViewportAtStatement", CSSViewportAtStatement);

import HTMLAttribute from "./html/attributes/HTMLAttribute";
builders.set("HTMLAttribute", HTMLAttribute);

import HTMLDoctypeTag from "./html/tags/HTMLDoctypeTag";
builders.set("HTMLDoctypeTag", HTMLDoctypeTag);

import HTMLElement from "./html/tags/HTMLElement";
builders.set("HTMLElement", HTMLElement);

import HTMLIdentifier from "./html/core/HTMLIdentifier";
builders.set("HTMLIdentifier", HTMLIdentifier);

import HTMLRoot from "./html/core/HTMLRoot";
builders.set("HTMLRoot", HTMLRoot);

import HTMLString from "./html/core/HTMLString";
builders.set("HTMLString", HTMLString);

import HTMLText from "./html/core/HTMLText";
builders.set("HTMLText", HTMLText);

import JSAmbiguousFlowTypeCastExpression from "./js/temp/JSAmbiguousFlowTypeCastExpression";
builders.set(
	"JSAmbiguousFlowTypeCastExpression",
	JSAmbiguousFlowTypeCastExpression,
);

import JSArrayExpression from "./js/expressions/JSArrayExpression";
builders.set("JSArrayExpression", JSArrayExpression);

import JSArrayHole from "./js/auxiliary/JSArrayHole";
builders.set("JSArrayHole", JSArrayHole);

import JSArrowFunctionExpression from "./js/expressions/JSArrowFunctionExpression";
builders.set("JSArrowFunctionExpression", JSArrowFunctionExpression);

import JSAssignmentArrayPattern from "./js/patterns/JSAssignmentArrayPattern";
builders.set("JSAssignmentArrayPattern", JSAssignmentArrayPattern);

import JSAssignmentAssignmentPattern from "./js/patterns/JSAssignmentAssignmentPattern";
builders.set("JSAssignmentAssignmentPattern", JSAssignmentAssignmentPattern);

import JSAssignmentExpression from "./js/expressions/JSAssignmentExpression";
builders.set("JSAssignmentExpression", JSAssignmentExpression);

import JSAssignmentIdentifier from "./js/patterns/JSAssignmentIdentifier";
builders.set("JSAssignmentIdentifier", JSAssignmentIdentifier);

import JSAssignmentObjectPattern from "./js/patterns/JSAssignmentObjectPattern";
builders.set("JSAssignmentObjectPattern", JSAssignmentObjectPattern);

import JSAssignmentObjectPatternProperty from "./js/patterns/JSAssignmentObjectPatternProperty";
builders.set(
	"JSAssignmentObjectPatternProperty",
	JSAssignmentObjectPatternProperty,
);

import JSAwaitExpression from "./js/expressions/JSAwaitExpression";
builders.set("JSAwaitExpression", JSAwaitExpression);

import JSBigIntLiteral from "./js/literals/JSBigIntLiteral";
builders.set("JSBigIntLiteral", JSBigIntLiteral);

import JSBinaryExpression from "./js/expressions/JSBinaryExpression";
builders.set("JSBinaryExpression", JSBinaryExpression);

import JSBindingArrayPattern from "./js/patterns/JSBindingArrayPattern";
builders.set("JSBindingArrayPattern", JSBindingArrayPattern);

import JSBindingAssignmentPattern from "./js/patterns/JSBindingAssignmentPattern";
builders.set("JSBindingAssignmentPattern", JSBindingAssignmentPattern);

import JSBindingIdentifier from "./js/patterns/JSBindingIdentifier";
builders.set("JSBindingIdentifier", JSBindingIdentifier);

import JSBindingObjectPattern from "./js/patterns/JSBindingObjectPattern";
builders.set("JSBindingObjectPattern", JSBindingObjectPattern);

import JSBindingObjectPatternProperty from "./js/patterns/JSBindingObjectPatternProperty";
builders.set("JSBindingObjectPatternProperty", JSBindingObjectPatternProperty);

import JSBlockStatement from "./js/statements/JSBlockStatement";
builders.set("JSBlockStatement", JSBlockStatement);

import JSBooleanLiteral from "./js/literals/JSBooleanLiteral";
builders.set("JSBooleanLiteral", JSBooleanLiteral);

import JSBreakStatement from "./js/statements/JSBreakStatement";
builders.set("JSBreakStatement", JSBreakStatement);

import JSCallExpression from "./js/expressions/JSCallExpression";
builders.set("JSCallExpression", JSCallExpression);

import JSCatchClause from "./js/auxiliary/JSCatchClause";
builders.set("JSCatchClause", JSCatchClause);

import JSClassDeclaration from "./js/classes/JSClassDeclaration";
builders.set("JSClassDeclaration", JSClassDeclaration);

import JSClassExpression from "./js/classes/JSClassExpression";
builders.set("JSClassExpression", JSClassExpression);

import JSClassHead from "./js/classes/JSClassHead";
builders.set("JSClassHead", JSClassHead);

import JSClassMethod from "./js/classes/JSClassMethod";
builders.set("JSClassMethod", JSClassMethod);

import JSClassPrivateMethod from "./js/classes/JSClassPrivateMethod";
builders.set("JSClassPrivateMethod", JSClassPrivateMethod);

import JSClassPrivateProperty from "./js/classes/JSClassPrivateProperty";
builders.set("JSClassPrivateProperty", JSClassPrivateProperty);

import JSClassProperty from "./js/classes/JSClassProperty";
builders.set("JSClassProperty", JSClassProperty);

import JSClassPropertyMeta from "./js/classes/JSClassPropertyMeta";
builders.set("JSClassPropertyMeta", JSClassPropertyMeta);

import JSComputedMemberProperty from "./js/auxiliary/JSComputedMemberProperty";
builders.set("JSComputedMemberProperty", JSComputedMemberProperty);

import JSComputedPropertyKey from "./js/objects/JSComputedPropertyKey";
builders.set("JSComputedPropertyKey", JSComputedPropertyKey);

import JSConditionalExpression from "./js/expressions/JSConditionalExpression";
builders.set("JSConditionalExpression", JSConditionalExpression);

import JSContinueStatement from "./js/statements/JSContinueStatement";
builders.set("JSContinueStatement", JSContinueStatement);

import JSDebuggerStatement from "./js/statements/JSDebuggerStatement";
builders.set("JSDebuggerStatement", JSDebuggerStatement);

import JSDirective from "./js/core/JSDirective";
builders.set("JSDirective", JSDirective);

import JSDoExpression from "./js/expressions/JSDoExpression";
builders.set("JSDoExpression", JSDoExpression);

import JSDoWhileStatement from "./js/statements/JSDoWhileStatement";
builders.set("JSDoWhileStatement", JSDoWhileStatement);

import JSEmptyStatement from "./js/statements/JSEmptyStatement";
builders.set("JSEmptyStatement", JSEmptyStatement);

import JSExportAllDeclaration from "./js/modules/JSExportAllDeclaration";
builders.set("JSExportAllDeclaration", JSExportAllDeclaration);

import JSExportDefaultDeclaration from "./js/modules/JSExportDefaultDeclaration";
builders.set("JSExportDefaultDeclaration", JSExportDefaultDeclaration);

import JSExportDefaultSpecifier from "./js/modules/JSExportDefaultSpecifier";
builders.set("JSExportDefaultSpecifier", JSExportDefaultSpecifier);

import JSExportExternalDeclaration from "./js/modules/JSExportExternalDeclaration";
builders.set("JSExportExternalDeclaration", JSExportExternalDeclaration);

import JSExportExternalSpecifier from "./js/modules/JSExportExternalSpecifier";
builders.set("JSExportExternalSpecifier", JSExportExternalSpecifier);

import JSExportLocalDeclaration from "./js/modules/JSExportLocalDeclaration";
builders.set("JSExportLocalDeclaration", JSExportLocalDeclaration);

import JSExportLocalSpecifier from "./js/modules/JSExportLocalSpecifier";
builders.set("JSExportLocalSpecifier", JSExportLocalSpecifier);

import JSExportNamespaceSpecifier from "./js/modules/JSExportNamespaceSpecifier";
builders.set("JSExportNamespaceSpecifier", JSExportNamespaceSpecifier);

import JSExpressionStatement from "./js/statements/JSExpressionStatement";
builders.set("JSExpressionStatement", JSExpressionStatement);

import JSForInStatement from "./js/statements/JSForInStatement";
builders.set("JSForInStatement", JSForInStatement);

import JSForOfStatement from "./js/statements/JSForOfStatement";
builders.set("JSForOfStatement", JSForOfStatement);

import JSForStatement from "./js/statements/JSForStatement";
builders.set("JSForStatement", JSForStatement);

import JSFunctionDeclaration from "./js/statements/JSFunctionDeclaration";
builders.set("JSFunctionDeclaration", JSFunctionDeclaration);

import JSFunctionExpression from "./js/expressions/JSFunctionExpression";
builders.set("JSFunctionExpression", JSFunctionExpression);

import JSFunctionHead from "./js/auxiliary/JSFunctionHead";
builders.set("JSFunctionHead", JSFunctionHead);

import JSIdentifier from "./js/auxiliary/JSIdentifier";
builders.set("JSIdentifier", JSIdentifier);

import JSIfStatement from "./js/statements/JSIfStatement";
builders.set("JSIfStatement", JSIfStatement);

import JSImportCall from "./js/modules/JSImportCall";
builders.set("JSImportCall", JSImportCall);

import JSImportDeclaration from "./js/modules/JSImportDeclaration";
builders.set("JSImportDeclaration", JSImportDeclaration);

import JSImportDefaultSpecifier from "./js/modules/JSImportDefaultSpecifier";
builders.set("JSImportDefaultSpecifier", JSImportDefaultSpecifier);

import JSImportNamespaceSpecifier from "./js/modules/JSImportNamespaceSpecifier";
builders.set("JSImportNamespaceSpecifier", JSImportNamespaceSpecifier);

import JSImportSpecifier from "./js/modules/JSImportSpecifier";
builders.set("JSImportSpecifier", JSImportSpecifier);

import JSImportSpecifierLocal from "./js/modules/JSImportSpecifierLocal";
builders.set("JSImportSpecifierLocal", JSImportSpecifierLocal);

import JSInterpreterDirective from "./js/core/JSInterpreterDirective";
builders.set("JSInterpreterDirective", JSInterpreterDirective);

import JSLabeledStatement from "./js/statements/JSLabeledStatement";
builders.set("JSLabeledStatement", JSLabeledStatement);

import JSLogicalExpression from "./js/expressions/JSLogicalExpression";
builders.set("JSLogicalExpression", JSLogicalExpression);

import JSMemberExpression from "./js/expressions/JSMemberExpression";
builders.set("JSMemberExpression", JSMemberExpression);

import JSMetaProperty from "./js/expressions/JSMetaProperty";
builders.set("JSMetaProperty", JSMetaProperty);

import JSNewExpression from "./js/expressions/JSNewExpression";
builders.set("JSNewExpression", JSNewExpression);

import JSNullLiteral from "./js/literals/JSNullLiteral";
builders.set("JSNullLiteral", JSNullLiteral);

import JSNumericLiteral from "./js/literals/JSNumericLiteral";
builders.set("JSNumericLiteral", JSNumericLiteral);

import JSObjectExpression from "./js/objects/JSObjectExpression";
builders.set("JSObjectExpression", JSObjectExpression);

import JSObjectMethod from "./js/objects/JSObjectMethod";
builders.set("JSObjectMethod", JSObjectMethod);

import JSObjectProperty from "./js/objects/JSObjectProperty";
builders.set("JSObjectProperty", JSObjectProperty);

import JSOptionalCallExpression from "./js/expressions/JSOptionalCallExpression";
builders.set("JSOptionalCallExpression", JSOptionalCallExpression);

import JSPatternMeta from "./js/patterns/JSPatternMeta";
builders.set("JSPatternMeta", JSPatternMeta);

import JSPrivateName from "./js/classes/JSPrivateName";
builders.set("JSPrivateName", JSPrivateName);

import JSReferenceIdentifier from "./js/expressions/JSReferenceIdentifier";
builders.set("JSReferenceIdentifier", JSReferenceIdentifier);

import JSRegExpAlternation from "./js/regex/JSRegExpAlternation";
builders.set("JSRegExpAlternation", JSRegExpAlternation);

import JSRegExpAnyCharacter from "./js/regex/JSRegExpAnyCharacter";
builders.set("JSRegExpAnyCharacter", JSRegExpAnyCharacter);

import JSRegExpCharacter from "./js/regex/JSRegExpCharacter";
builders.set("JSRegExpCharacter", JSRegExpCharacter);

import JSRegExpCharSet from "./js/regex/JSRegExpCharSet";
builders.set("JSRegExpCharSet", JSRegExpCharSet);

import JSRegExpCharSetRange from "./js/regex/JSRegExpCharSetRange";
builders.set("JSRegExpCharSetRange", JSRegExpCharSetRange);

import JSRegExpControlCharacter from "./js/regex/JSRegExpControlCharacter";
builders.set("JSRegExpControlCharacter", JSRegExpControlCharacter);

import JSRegExpDigitCharacter from "./js/regex/JSRegExpDigitCharacter";
builders.set("JSRegExpDigitCharacter", JSRegExpDigitCharacter);

import JSRegExpEndCharacter from "./js/regex/JSRegExpEndCharacter";
builders.set("JSRegExpEndCharacter", JSRegExpEndCharacter);

import JSRegExpGroupCapture from "./js/regex/JSRegExpGroupCapture";
builders.set("JSRegExpGroupCapture", JSRegExpGroupCapture);

import JSRegExpGroupNonCapture from "./js/regex/JSRegExpGroupNonCapture";
builders.set("JSRegExpGroupNonCapture", JSRegExpGroupNonCapture);

import JSRegExpLiteral from "./js/literals/JSRegExpLiteral";
builders.set("JSRegExpLiteral", JSRegExpLiteral);

import JSRegExpNamedBackReference from "./js/regex/JSRegExpNamedBackReference";
builders.set("JSRegExpNamedBackReference", JSRegExpNamedBackReference);

import JSRegExpNonDigitCharacter from "./js/regex/JSRegExpNonDigitCharacter";
builders.set("JSRegExpNonDigitCharacter", JSRegExpNonDigitCharacter);

import JSRegExpNonWhiteSpaceCharacter from "./js/regex/JSRegExpNonWhiteSpaceCharacter";
builders.set("JSRegExpNonWhiteSpaceCharacter", JSRegExpNonWhiteSpaceCharacter);

import JSRegExpNonWordBoundaryCharacter from "./js/regex/JSRegExpNonWordBoundaryCharacter";
builders.set(
	"JSRegExpNonWordBoundaryCharacter",
	JSRegExpNonWordBoundaryCharacter,
);

import JSRegExpNonWordCharacter from "./js/regex/JSRegExpNonWordCharacter";
builders.set("JSRegExpNonWordCharacter", JSRegExpNonWordCharacter);

import JSRegExpNumericBackReference from "./js/regex/JSRegExpNumericBackReference";
builders.set("JSRegExpNumericBackReference", JSRegExpNumericBackReference);

import JSRegExpQuantified from "./js/regex/JSRegExpQuantified";
builders.set("JSRegExpQuantified", JSRegExpQuantified);

import JSRegExpStartCharacter from "./js/regex/JSRegExpStartCharacter";
builders.set("JSRegExpStartCharacter", JSRegExpStartCharacter);

import JSRegExpSubExpression from "./js/regex/JSRegExpSubExpression";
builders.set("JSRegExpSubExpression", JSRegExpSubExpression);

import JSRegExpWhiteSpaceCharacter from "./js/regex/JSRegExpWhiteSpaceCharacter";
builders.set("JSRegExpWhiteSpaceCharacter", JSRegExpWhiteSpaceCharacter);

import JSRegExpWordBoundaryCharacter from "./js/regex/JSRegExpWordBoundaryCharacter";
builders.set("JSRegExpWordBoundaryCharacter", JSRegExpWordBoundaryCharacter);

import JSRegExpWordCharacter from "./js/regex/JSRegExpWordCharacter";
builders.set("JSRegExpWordCharacter", JSRegExpWordCharacter);

import JSReturnStatement from "./js/statements/JSReturnStatement";
builders.set("JSReturnStatement", JSReturnStatement);

import JSRoot from "./js/core/JSRoot";
builders.set("JSRoot", JSRoot);

import JSSequenceExpression from "./js/expressions/JSSequenceExpression";
builders.set("JSSequenceExpression", JSSequenceExpression);

import JSSpreadElement from "./js/auxiliary/JSSpreadElement";
builders.set("JSSpreadElement", JSSpreadElement);

import JSSpreadProperty from "./js/objects/JSSpreadProperty";
builders.set("JSSpreadProperty", JSSpreadProperty);

import JSStaticMemberProperty from "./js/auxiliary/JSStaticMemberProperty";
builders.set("JSStaticMemberProperty", JSStaticMemberProperty);

import JSStaticPropertyKey from "./js/objects/JSStaticPropertyKey";
builders.set("JSStaticPropertyKey", JSStaticPropertyKey);

import JSStringLiteral from "./js/literals/JSStringLiteral";
builders.set("JSStringLiteral", JSStringLiteral);

import JSSuper from "./js/expressions/JSSuper";
builders.set("JSSuper", JSSuper);

import JSSwitchCase from "./js/auxiliary/JSSwitchCase";
builders.set("JSSwitchCase", JSSwitchCase);

import JSSwitchStatement from "./js/statements/JSSwitchStatement";
builders.set("JSSwitchStatement", JSSwitchStatement);

import JSTaggedTemplateExpression from "./js/expressions/JSTaggedTemplateExpression";
builders.set("JSTaggedTemplateExpression", JSTaggedTemplateExpression);

import JSTemplateElement from "./js/auxiliary/JSTemplateElement";
builders.set("JSTemplateElement", JSTemplateElement);

import JSTemplateLiteral from "./js/literals/JSTemplateLiteral";
builders.set("JSTemplateLiteral", JSTemplateLiteral);

import JSThisExpression from "./js/expressions/JSThisExpression";
builders.set("JSThisExpression", JSThisExpression);

import JSThrowStatement from "./js/statements/JSThrowStatement";
builders.set("JSThrowStatement", JSThrowStatement);

import JSTryStatement from "./js/statements/JSTryStatement";
builders.set("JSTryStatement", JSTryStatement);

import JSUnaryExpression from "./js/expressions/JSUnaryExpression";
builders.set("JSUnaryExpression", JSUnaryExpression);

import JSUpdateExpression from "./js/expressions/JSUpdateExpression";
builders.set("JSUpdateExpression", JSUpdateExpression);

import JSVariableDeclaration from "./js/auxiliary/JSVariableDeclaration";
builders.set("JSVariableDeclaration", JSVariableDeclaration);

import JSVariableDeclarationStatement from "./js/statements/JSVariableDeclarationStatement";
builders.set("JSVariableDeclarationStatement", JSVariableDeclarationStatement);

import JSVariableDeclarator from "./js/auxiliary/JSVariableDeclarator";
builders.set("JSVariableDeclarator", JSVariableDeclarator);

import JSWhileStatement from "./js/statements/JSWhileStatement";
builders.set("JSWhileStatement", JSWhileStatement);

import JSWithStatement from "./js/statements/JSWithStatement";
builders.set("JSWithStatement", JSWithStatement);

import JSXAttribute from "./js/jsx/JSXAttribute";
builders.set("JSXAttribute", JSXAttribute);

import JSXElement from "./js/jsx/JSXElement";
builders.set("JSXElement", JSXElement);

import JSXEmptyExpression from "./js/jsx/JSXEmptyExpression";
builders.set("JSXEmptyExpression", JSXEmptyExpression);

import JSXExpressionContainer from "./js/jsx/JSXExpressionContainer";
builders.set("JSXExpressionContainer", JSXExpressionContainer);

import JSXFragment from "./js/jsx/JSXFragment";
builders.set("JSXFragment", JSXFragment);

import JSXIdentifier from "./js/jsx/JSXIdentifier";
builders.set("JSXIdentifier", JSXIdentifier);

import JSXMemberExpression from "./js/jsx/JSXMemberExpression";
builders.set("JSXMemberExpression", JSXMemberExpression);

import JSXNamespacedName from "./js/jsx/JSXNamespacedName";
builders.set("JSXNamespacedName", JSXNamespacedName);

import JSXReferenceIdentifier from "./js/jsx/JSXReferenceIdentifier";
builders.set("JSXReferenceIdentifier", JSXReferenceIdentifier);

import JSXSpreadAttribute from "./js/jsx/JSXSpreadAttribute";
builders.set("JSXSpreadAttribute", JSXSpreadAttribute);

import JSXSpreadChild from "./js/jsx/JSXSpreadChild";
builders.set("JSXSpreadChild", JSXSpreadChild);

import JSXText from "./js/jsx/JSXText";
builders.set("JSXText", JSXText);

import JSYieldExpression from "./js/expressions/JSYieldExpression";
builders.set("JSYieldExpression", JSYieldExpression);

import MockParent from "./common/core/MockParent";
builders.set("MockParent", MockParent);

import TSAnyKeywordTypeAnnotation from "./js/typescript/TSAnyKeywordTypeAnnotation";
builders.set("TSAnyKeywordTypeAnnotation", TSAnyKeywordTypeAnnotation);

import TSArrayType from "./js/typescript/TSArrayType";
builders.set("TSArrayType", TSArrayType);

import TSAsExpression from "./js/typescript/TSAsExpression";
builders.set("TSAsExpression", TSAsExpression);

import TSAssignmentAsExpression from "./js/typescript/TSAssignmentAsExpression";
builders.set("TSAssignmentAsExpression", TSAssignmentAsExpression);

import TSAssignmentNonNullExpression from "./js/typescript/TSAssignmentNonNullExpression";
builders.set("TSAssignmentNonNullExpression", TSAssignmentNonNullExpression);

import TSAssignmentTypeAssertion from "./js/typescript/TSAssignmentTypeAssertion";
builders.set("TSAssignmentTypeAssertion", TSAssignmentTypeAssertion);

import TSBigIntKeywordTypeAnnotation from "./js/typescript/TSBigIntKeywordTypeAnnotation";
builders.set("TSBigIntKeywordTypeAnnotation", TSBigIntKeywordTypeAnnotation);

import TSBooleanKeywordTypeAnnotation from "./js/typescript/TSBooleanKeywordTypeAnnotation";
builders.set("TSBooleanKeywordTypeAnnotation", TSBooleanKeywordTypeAnnotation);

import TSBooleanLiteralTypeAnnotation from "./js/typescript/TSBooleanLiteralTypeAnnotation";
builders.set("TSBooleanLiteralTypeAnnotation", TSBooleanLiteralTypeAnnotation);

import TSCallSignatureDeclaration from "./js/typescript/TSCallSignatureDeclaration";
builders.set("TSCallSignatureDeclaration", TSCallSignatureDeclaration);

import TSConditionalType from "./js/typescript/TSConditionalType";
builders.set("TSConditionalType", TSConditionalType);

import TSConstructorType from "./js/typescript/TSConstructorType";
builders.set("TSConstructorType", TSConstructorType);

import TSConstructSignatureDeclaration from "./js/typescript/TSConstructSignatureDeclaration";
builders.set("TSConstructSignatureDeclaration", TSConstructSignatureDeclaration);

import TSDeclareFunction from "./js/typescript/TSDeclareFunction";
builders.set("TSDeclareFunction", TSDeclareFunction);

import TSDeclareMethod from "./js/typescript/TSDeclareMethod";
builders.set("TSDeclareMethod", TSDeclareMethod);

import TSEmptyKeywordTypeAnnotation from "./js/typescript/TSEmptyKeywordTypeAnnotation";
builders.set("TSEmptyKeywordTypeAnnotation", TSEmptyKeywordTypeAnnotation);

import TSEnumDeclaration from "./js/typescript/TSEnumDeclaration";
builders.set("TSEnumDeclaration", TSEnumDeclaration);

import TSEnumMember from "./js/typescript/TSEnumMember";
builders.set("TSEnumMember", TSEnumMember);

import TSExportAssignment from "./js/typescript/TSExportAssignment";
builders.set("TSExportAssignment", TSExportAssignment);

import TSExpressionWithTypeArguments from "./js/typescript/TSExpressionWithTypeArguments";
builders.set("TSExpressionWithTypeArguments", TSExpressionWithTypeArguments);

import TSExternalModuleReference from "./js/typescript/TSExternalModuleReference";
builders.set("TSExternalModuleReference", TSExternalModuleReference);

import TSFunctionType from "./js/typescript/TSFunctionType";
builders.set("TSFunctionType", TSFunctionType);

import TSImportEqualsDeclaration from "./js/typescript/TSImportEqualsDeclaration";
builders.set("TSImportEqualsDeclaration", TSImportEqualsDeclaration);

import TSImportType from "./js/typescript/TSImportType";
builders.set("TSImportType", TSImportType);

import TSIndexedAccessType from "./js/typescript/TSIndexedAccessType";
builders.set("TSIndexedAccessType", TSIndexedAccessType);

import TSIndexSignature from "./js/typescript/TSIndexSignature";
builders.set("TSIndexSignature", TSIndexSignature);

import TSInferType from "./js/typescript/TSInferType";
builders.set("TSInferType", TSInferType);

import TSInterfaceBody from "./js/typescript/TSInterfaceBody";
builders.set("TSInterfaceBody", TSInterfaceBody);

import TSInterfaceDeclaration from "./js/typescript/TSInterfaceDeclaration";
builders.set("TSInterfaceDeclaration", TSInterfaceDeclaration);

import TSIntersectionTypeAnnotation from "./js/typescript/TSIntersectionTypeAnnotation";
builders.set("TSIntersectionTypeAnnotation", TSIntersectionTypeAnnotation);

import TSMappedType from "./js/typescript/TSMappedType";
builders.set("TSMappedType", TSMappedType);

import TSMethodSignature from "./js/typescript/TSMethodSignature";
builders.set("TSMethodSignature", TSMethodSignature);

import TSMixedKeywordTypeAnnotation from "./js/typescript/TSMixedKeywordTypeAnnotation";
builders.set("TSMixedKeywordTypeAnnotation", TSMixedKeywordTypeAnnotation);

import TSModuleBlock from "./js/typescript/TSModuleBlock";
builders.set("TSModuleBlock", TSModuleBlock);

import TSModuleDeclaration from "./js/typescript/TSModuleDeclaration";
builders.set("TSModuleDeclaration", TSModuleDeclaration);

import TSNamespaceExportDeclaration from "./js/typescript/TSNamespaceExportDeclaration";
builders.set("TSNamespaceExportDeclaration", TSNamespaceExportDeclaration);

import TSNeverKeywordTypeAnnotation from "./js/typescript/TSNeverKeywordTypeAnnotation";
builders.set("TSNeverKeywordTypeAnnotation", TSNeverKeywordTypeAnnotation);

import TSNonNullExpression from "./js/typescript/TSNonNullExpression";
builders.set("TSNonNullExpression", TSNonNullExpression);

import TSNullKeywordTypeAnnotation from "./js/typescript/TSNullKeywordTypeAnnotation";
builders.set("TSNullKeywordTypeAnnotation", TSNullKeywordTypeAnnotation);

import TSNumberKeywordTypeAnnotation from "./js/typescript/TSNumberKeywordTypeAnnotation";
builders.set("TSNumberKeywordTypeAnnotation", TSNumberKeywordTypeAnnotation);

import TSNumericLiteralTypeAnnotation from "./js/typescript/TSNumericLiteralTypeAnnotation";
builders.set("TSNumericLiteralTypeAnnotation", TSNumericLiteralTypeAnnotation);

import TSObjectKeywordTypeAnnotation from "./js/typescript/TSObjectKeywordTypeAnnotation";
builders.set("TSObjectKeywordTypeAnnotation", TSObjectKeywordTypeAnnotation);

import TSObjectTypeAnnotation from "./js/typescript/TSObjectTypeAnnotation";
builders.set("TSObjectTypeAnnotation", TSObjectTypeAnnotation);

import TSParenthesizedType from "./js/typescript/TSParenthesizedType";
builders.set("TSParenthesizedType", TSParenthesizedType);

import TSPropertySignature from "./js/typescript/TSPropertySignature";
builders.set("TSPropertySignature", TSPropertySignature);

import TSQualifiedName from "./js/typescript/TSQualifiedName";
builders.set("TSQualifiedName", TSQualifiedName);

import TSSignatureDeclarationMeta from "./js/typescript/TSSignatureDeclarationMeta";
builders.set("TSSignatureDeclarationMeta", TSSignatureDeclarationMeta);

import TSStringKeywordTypeAnnotation from "./js/typescript/TSStringKeywordTypeAnnotation";
builders.set("TSStringKeywordTypeAnnotation", TSStringKeywordTypeAnnotation);

import TSStringLiteralTypeAnnotation from "./js/typescript/TSStringLiteralTypeAnnotation";
builders.set("TSStringLiteralTypeAnnotation", TSStringLiteralTypeAnnotation);

import TSSymbolKeywordTypeAnnotation from "./js/typescript/TSSymbolKeywordTypeAnnotation";
builders.set("TSSymbolKeywordTypeAnnotation", TSSymbolKeywordTypeAnnotation);

import TSTemplateLiteralTypeAnnotation from "./js/typescript/TSTemplateLiteralTypeAnnotation";
builders.set("TSTemplateLiteralTypeAnnotation", TSTemplateLiteralTypeAnnotation);

import TSThisType from "./js/typescript/TSThisType";
builders.set("TSThisType", TSThisType);

import TSTupleElement from "./js/typescript/TSTupleElement";
builders.set("TSTupleElement", TSTupleElement);

import TSTupleType from "./js/typescript/TSTupleType";
builders.set("TSTupleType", TSTupleType);

import TSTypeAlias from "./js/typescript/TSTypeAlias";
builders.set("TSTypeAlias", TSTypeAlias);

import TSTypeAssertion from "./js/typescript/TSTypeAssertion";
builders.set("TSTypeAssertion", TSTypeAssertion);

import TSTypeOperator from "./js/typescript/TSTypeOperator";
builders.set("TSTypeOperator", TSTypeOperator);

import TSTypeParameter from "./js/typescript/TSTypeParameter";
builders.set("TSTypeParameter", TSTypeParameter);

import TSTypeParameterDeclaration from "./js/typescript/TSTypeParameterDeclaration";
builders.set("TSTypeParameterDeclaration", TSTypeParameterDeclaration);

import TSTypeParameterInstantiation from "./js/typescript/TSTypeParameterInstantiation";
builders.set("TSTypeParameterInstantiation", TSTypeParameterInstantiation);

import TSTypePredicate from "./js/typescript/TSTypePredicate";
builders.set("TSTypePredicate", TSTypePredicate);

import TSTypeQuery from "./js/typescript/TSTypeQuery";
builders.set("TSTypeQuery", TSTypeQuery);

import TSTypeReference from "./js/typescript/TSTypeReference";
builders.set("TSTypeReference", TSTypeReference);

import TSUndefinedKeywordTypeAnnotation from "./js/typescript/TSUndefinedKeywordTypeAnnotation";
builders.set(
	"TSUndefinedKeywordTypeAnnotation",
	TSUndefinedKeywordTypeAnnotation,
);

import TSUnionTypeAnnotation from "./js/typescript/TSUnionTypeAnnotation";
builders.set("TSUnionTypeAnnotation", TSUnionTypeAnnotation);

import TSUnknownKeywordTypeAnnotation from "./js/typescript/TSUnknownKeywordTypeAnnotation";
builders.set("TSUnknownKeywordTypeAnnotation", TSUnknownKeywordTypeAnnotation);

import TSVoidKeywordTypeAnnotation from "./js/typescript/TSVoidKeywordTypeAnnotation";
builders.set("TSVoidKeywordTypeAnnotation", TSVoidKeywordTypeAnnotation);
