// source: proto/business.proto
/**
 * @fileoverview
 * @enhanceable
 * @suppress {missingRequire} reports error on implicit type usages.
 * @suppress {messageConventions} JS Compiler reports an error if a variable or
 *     field starts with 'MSG_' and isn't a translatable message.
 * @public
 */
// GENERATED CODE -- DO NOT EDIT!
/* eslint-disable */
// @ts-nocheck

var jspb = require('google-protobuf');
var goog = jspb;
var global = Function('return this')();

var proto_base_data_type_pb = require('../proto/base_data_type_pb.js');
goog.object.extend(proto, proto_base_data_type_pb);
var proto_client_pb = require('../proto/client_pb.js');
goog.object.extend(proto, proto_client_pb);
goog.exportSymbol('proto.data.Callout', null, global);
goog.exportSymbol('proto.data.Chart', null, global);
goog.exportSymbol('proto.data.ChartData', null, global);
goog.exportSymbol('proto.data.ChartSerie', null, global);
goog.exportSymbol('proto.data.ChatEntry', null, global);
goog.exportSymbol('proto.data.ChatEntry.ChatEntryType', null, global);
goog.exportSymbol('proto.data.ChatEntry.ConfidentialType', null, global);
goog.exportSymbol('proto.data.ChatEntry.ModeratorStatus', null, global);
goog.exportSymbol('proto.data.ColorSchema', null, global);
goog.exportSymbol('proto.data.ContextInfoValue', null, global);
goog.exportSymbol('proto.data.CreateChatEntryRequest', null, global);
goog.exportSymbol('proto.data.CreateEntityRequest', null, global);
goog.exportSymbol('proto.data.DefaultValue', null, global);
goog.exportSymbol('proto.data.DeleteEntityRequest', null, global);
goog.exportSymbol('proto.data.DeletePreferenceRequest', null, global);
goog.exportSymbol('proto.data.DeletePreferenceRequest.Type', null, global);
goog.exportSymbol('proto.data.EntityChat', null, global);
goog.exportSymbol('proto.data.EntityChat.ConfidentialType', null, global);
goog.exportSymbol('proto.data.EntityChat.ModerationType', null, global);
goog.exportSymbol('proto.data.Favorite', null, global);
goog.exportSymbol('proto.data.GetAttachmentRequest', null, global);
goog.exportSymbol('proto.data.GetChartRequest', null, global);
goog.exportSymbol('proto.data.GetContextInfoValueRequest', null, global);
goog.exportSymbol('proto.data.GetDefaultValueRequest', null, global);
goog.exportSymbol('proto.data.GetEntityRequest', null, global);
goog.exportSymbol('proto.data.GetLookupItemRequest', null, global);
goog.exportSymbol('proto.data.GetPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.GetRecordAccessRequest', null, global);
goog.exportSymbol('proto.data.GetReportOutputRequest', null, global);
goog.exportSymbol('proto.data.GetResourceReferenceRequest', null, global);
goog.exportSymbol('proto.data.GetResourceRequest', null, global);
goog.exportSymbol('proto.data.GetResourceRequest.Operation', null, global);
goog.exportSymbol('proto.data.GetTabEntityRequest', null, global);
goog.exportSymbol('proto.data.ListBrowserItemsRequest', null, global);
goog.exportSymbol('proto.data.ListBrowserItemsResponse', null, global);
goog.exportSymbol('proto.data.ListChatEntriesRequest', null, global);
goog.exportSymbol('proto.data.ListChatEntriesResponse', null, global);
goog.exportSymbol('proto.data.ListDashboardsRequest', null, global);
goog.exportSymbol('proto.data.ListDashboardsResponse', null, global);
goog.exportSymbol('proto.data.ListDocumentActionsRequest', null, global);
goog.exportSymbol('proto.data.ListDocumentActionsResponse', null, global);
goog.exportSymbol('proto.data.ListDocumentStatusesRequest', null, global);
goog.exportSymbol('proto.data.ListDocumentStatusesResponse', null, global);
goog.exportSymbol('proto.data.ListDrillTablesRequest', null, global);
goog.exportSymbol('proto.data.ListDrillTablesResponse', null, global);
goog.exportSymbol('proto.data.ListEntitiesRequest', null, global);
goog.exportSymbol('proto.data.ListEntitiesResponse', null, global);
goog.exportSymbol('proto.data.ListEntityChatsRequest', null, global);
goog.exportSymbol('proto.data.ListEntityChatsResponse', null, global);
goog.exportSymbol('proto.data.ListEntityLogsRequest', null, global);
goog.exportSymbol('proto.data.ListEntityLogsResponse', null, global);
goog.exportSymbol('proto.data.ListFavoritesRequest', null, global);
goog.exportSymbol('proto.data.ListFavoritesResponse', null, global);
goog.exportSymbol('proto.data.ListGeneralInfoRequest', null, global);
goog.exportSymbol('proto.data.ListLookupItemsRequest', null, global);
goog.exportSymbol('proto.data.ListLookupItemsResponse', null, global);
goog.exportSymbol('proto.data.ListPendingDocumentsRequest', null, global);
goog.exportSymbol('proto.data.ListPendingDocumentsResponse', null, global);
goog.exportSymbol('proto.data.ListPrintFormatsRequest', null, global);
goog.exportSymbol('proto.data.ListPrintFormatsResponse', null, global);
goog.exportSymbol('proto.data.ListProcessLogsRequest', null, global);
goog.exportSymbol('proto.data.ListProcessLogsResponse', null, global);
goog.exportSymbol('proto.data.ListRecentItemsRequest', null, global);
goog.exportSymbol('proto.data.ListRecentItemsResponse', null, global);
goog.exportSymbol('proto.data.ListReferencesRequest', null, global);
goog.exportSymbol('proto.data.ListReferencesResponse', null, global);
goog.exportSymbol('proto.data.ListReportViewsRequest', null, global);
goog.exportSymbol('proto.data.ListReportViewsResponse', null, global);
goog.exportSymbol('proto.data.ListTabEntitiesRequest', null, global);
goog.exportSymbol('proto.data.ListTabEntitiesResponse', null, global);
goog.exportSymbol('proto.data.ListTranslationsRequest', null, global);
goog.exportSymbol('proto.data.ListTranslationsResponse', null, global);
goog.exportSymbol('proto.data.ListWorkflowActivitiesRequest', null, global);
goog.exportSymbol('proto.data.ListWorkflowActivitiesResponse', null, global);
goog.exportSymbol('proto.data.ListWorkflowLogsRequest', null, global);
goog.exportSymbol('proto.data.ListWorkflowLogsResponse', null, global);
goog.exportSymbol('proto.data.ListWorkflowsRequest', null, global);
goog.exportSymbol('proto.data.ListWorkflowsResponse', null, global);
goog.exportSymbol('proto.data.LockPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.LookupItem', null, global);
goog.exportSymbol('proto.data.PendingDocument', null, global);
goog.exportSymbol('proto.data.Preference', null, global);
goog.exportSymbol('proto.data.Preference.Type', null, global);
goog.exportSymbol('proto.data.PrivateAccess', null, global);
goog.exportSymbol('proto.data.RecentItem', null, global);
goog.exportSymbol('proto.data.RecordAccess', null, global);
goog.exportSymbol('proto.data.RecordAccessRole', null, global);
goog.exportSymbol('proto.data.RollbackEntityRequest', null, global);
goog.exportSymbol('proto.data.RunBusinessProcessRequest', null, global);
goog.exportSymbol('proto.data.RunCalloutRequest', null, global);
goog.exportSymbol('proto.data.SetPreferenceRequest', null, global);
goog.exportSymbol('proto.data.SetPreferenceRequest.Type', null, global);
goog.exportSymbol('proto.data.SetRecordAccessRequest', null, global);
goog.exportSymbol('proto.data.UnlockPrivateAccessRequest', null, global);
goog.exportSymbol('proto.data.UpdateBrowserEntityRequest', null, global);
goog.exportSymbol('proto.data.UpdateEntityRequest', null, global);
goog.exportSymbol('proto.data.WorkflowActivity', null, global);
goog.exportSymbol('proto.data.WorkflowCondition', null, global);
goog.exportSymbol('proto.data.WorkflowCondition.ConditionType', null, global);
goog.exportSymbol('proto.data.WorkflowCondition.Operation', null, global);
goog.exportSymbol('proto.data.WorkflowDefinition', null, global);
goog.exportSymbol('proto.data.WorkflowDefinition.DurationUnit', null, global);
goog.exportSymbol('proto.data.WorkflowDefinition.PublishStatus', null, global);
goog.exportSymbol('proto.data.WorkflowEvent', null, global);
goog.exportSymbol('proto.data.WorkflowEvent.EventType', null, global);
goog.exportSymbol('proto.data.WorkflowEvent.WorkflowState', null, global);
goog.exportSymbol('proto.data.WorkflowNode', null, global);
goog.exportSymbol('proto.data.WorkflowNode.Action', null, global);
goog.exportSymbol('proto.data.WorkflowProcess', null, global);
goog.exportSymbol('proto.data.WorkflowProcess.Priority', null, global);
goog.exportSymbol('proto.data.WorkflowProcess.WorkflowState', null, global);
goog.exportSymbol('proto.data.WorkflowTransition', null, global);
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetRecordAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetRecordAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetRecordAccessRequest.displayName = 'proto.data.GetRecordAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.SetRecordAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.SetRecordAccessRequest.repeatedFields_, null);
};
goog.inherits(proto.data.SetRecordAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.SetRecordAccessRequest.displayName = 'proto.data.SetRecordAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RecordAccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RecordAccess.repeatedFields_, null);
};
goog.inherits(proto.data.RecordAccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RecordAccess.displayName = 'proto.data.RecordAccess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RecordAccessRole = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RecordAccessRole, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RecordAccessRole.displayName = 'proto.data.RecordAccessRole';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetAttachmentRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetAttachmentRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetAttachmentRequest.displayName = 'proto.data.GetAttachmentRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.SetPreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.SetPreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.SetPreferenceRequest.displayName = 'proto.data.SetPreferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DeletePreferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DeletePreferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeletePreferenceRequest.displayName = 'proto.data.DeletePreferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Preference = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Preference, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Preference.displayName = 'proto.data.Preference';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetResourceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetResourceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetResourceRequest.displayName = 'proto.data.GetResourceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetResourceReferenceRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetResourceReferenceRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetResourceReferenceRequest.displayName = 'proto.data.GetResourceReferenceRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetReportOutputRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetReportOutputRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetReportOutputRequest.displayName = 'proto.data.GetReportOutputRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.CreateEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.CreateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateEntityRequest.displayName = 'proto.data.CreateEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.LockPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.LockPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.LockPrivateAccessRequest.displayName = 'proto.data.LockPrivateAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetEntityRequest.displayName = 'proto.data.GetEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetPrivateAccessRequest.displayName = 'proto.data.GetPrivateAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UnlockPrivateAccessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.UnlockPrivateAccessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UnlockPrivateAccessRequest.displayName = 'proto.data.UnlockPrivateAccessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PrivateAccess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PrivateAccess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PrivateAccess.displayName = 'proto.data.PrivateAccess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RollbackEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RollbackEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RollbackEntityRequest.displayName = 'proto.data.RollbackEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdateEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.UpdateEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.UpdateEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateEntityRequest.displayName = 'proto.data.UpdateEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DeleteEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.DeleteEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.DeleteEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DeleteEntityRequest.displayName = 'proto.data.DeleteEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListBrowserItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListBrowserItemsRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListBrowserItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListBrowserItemsRequest.displayName = 'proto.data.ListBrowserItemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListBrowserItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListBrowserItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListBrowserItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListBrowserItemsResponse.displayName = 'proto.data.ListBrowserItemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.UpdateBrowserEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.UpdateBrowserEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.UpdateBrowserEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.UpdateBrowserEntityRequest.displayName = 'proto.data.UpdateBrowserEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ContextInfoValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ContextInfoValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ContextInfoValue.displayName = 'proto.data.ContextInfoValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetLookupItemRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.GetLookupItemRequest.repeatedFields_, null);
};
goog.inherits(proto.data.GetLookupItemRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetLookupItemRequest.displayName = 'proto.data.GetLookupItemRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetDefaultValueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.GetDefaultValueRequest.repeatedFields_, null);
};
goog.inherits(proto.data.GetDefaultValueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetDefaultValueRequest.displayName = 'proto.data.GetDefaultValueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.DefaultValue = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.DefaultValue, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.DefaultValue.displayName = 'proto.data.DefaultValue';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetContextInfoValueRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetContextInfoValueRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetContextInfoValueRequest.displayName = 'proto.data.GetContextInfoValueRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.LookupItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.LookupItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.LookupItem.displayName = 'proto.data.LookupItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListLookupItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListLookupItemsRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListLookupItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListLookupItemsRequest.displayName = 'proto.data.ListLookupItemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListLookupItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListLookupItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListLookupItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListLookupItemsResponse.displayName = 'proto.data.ListLookupItemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetTabEntityRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.GetTabEntityRequest.repeatedFields_, null);
};
goog.inherits(proto.data.GetTabEntityRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetTabEntityRequest.displayName = 'proto.data.GetTabEntityRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListTabEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTabEntitiesRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListTabEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTabEntitiesRequest.displayName = 'proto.data.ListTabEntitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListTabEntitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTabEntitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListTabEntitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTabEntitiesResponse.displayName = 'proto.data.ListTabEntitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListEntitiesRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListEntitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntitiesRequest.displayName = 'proto.data.ListEntitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListEntitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListEntitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntitiesResponse.displayName = 'proto.data.ListEntitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RunCalloutRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RunCalloutRequest.repeatedFields_, null);
};
goog.inherits(proto.data.RunCalloutRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RunCalloutRequest.displayName = 'proto.data.RunCalloutRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Callout = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Callout, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Callout.displayName = 'proto.data.Callout';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RunBusinessProcessRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.RunBusinessProcessRequest.repeatedFields_, null);
};
goog.inherits(proto.data.RunBusinessProcessRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RunBusinessProcessRequest.displayName = 'proto.data.RunBusinessProcessRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListProcessLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListProcessLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListProcessLogsRequest.displayName = 'proto.data.ListProcessLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListProcessLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListProcessLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListProcessLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListProcessLogsResponse.displayName = 'proto.data.ListProcessLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecentItemsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListRecentItemsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecentItemsRequest.displayName = 'proto.data.ListRecentItemsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.RecentItem = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.RecentItem, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.RecentItem.displayName = 'proto.data.RecentItem';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListRecentItemsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListRecentItemsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListRecentItemsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListRecentItemsResponse.displayName = 'proto.data.ListRecentItemsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListFavoritesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListFavoritesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListFavoritesRequest.displayName = 'proto.data.ListFavoritesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Favorite = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.Favorite, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Favorite.displayName = 'proto.data.Favorite';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListFavoritesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListFavoritesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListFavoritesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListFavoritesResponse.displayName = 'proto.data.ListFavoritesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListTranslationsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListTranslationsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTranslationsRequest.displayName = 'proto.data.ListTranslationsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListTranslationsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListTranslationsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListTranslationsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListTranslationsResponse.displayName = 'proto.data.ListTranslationsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPendingDocumentsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPendingDocumentsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPendingDocumentsRequest.displayName = 'proto.data.ListPendingDocumentsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.PendingDocument = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.PendingDocument, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.PendingDocument.displayName = 'proto.data.PendingDocument';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPendingDocumentsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPendingDocumentsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPendingDocumentsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPendingDocumentsResponse.displayName = 'proto.data.ListPendingDocumentsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.GetChartRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.GetChartRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.GetChartRequest.displayName = 'proto.data.GetChartRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.Chart = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.Chart.repeatedFields_, null);
};
goog.inherits(proto.data.Chart, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.Chart.displayName = 'proto.data.Chart';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ChartSerie = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ChartSerie.repeatedFields_, null);
};
goog.inherits(proto.data.ChartSerie, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ChartSerie.displayName = 'proto.data.ChartSerie';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ChartData = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ChartData, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ChartData.displayName = 'proto.data.ChartData';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ColorSchema = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ColorSchema, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ColorSchema.displayName = 'proto.data.ColorSchema';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDashboardsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDashboardsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDashboardsRequest.displayName = 'proto.data.ListDashboardsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDashboardsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDashboardsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDashboardsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDashboardsResponse.displayName = 'proto.data.ListDashboardsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPrintFormatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListPrintFormatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPrintFormatsRequest.displayName = 'proto.data.ListPrintFormatsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListPrintFormatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListPrintFormatsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListPrintFormatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListPrintFormatsResponse.displayName = 'proto.data.ListPrintFormatsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntityLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListEntityLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntityLogsRequest.displayName = 'proto.data.ListEntityLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntityLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListEntityLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListEntityLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntityLogsResponse.displayName = 'proto.data.ListEntityLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntityChatsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListEntityChatsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntityChatsRequest.displayName = 'proto.data.ListEntityChatsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.EntityChat = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.EntityChat, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.EntityChat.displayName = 'proto.data.EntityChat';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListEntityChatsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListEntityChatsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListEntityChatsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListEntityChatsResponse.displayName = 'proto.data.ListEntityChatsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListChatEntriesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListChatEntriesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListChatEntriesRequest.displayName = 'proto.data.ListChatEntriesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ChatEntry = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ChatEntry, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ChatEntry.displayName = 'proto.data.ChatEntry';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.CreateChatEntryRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.CreateChatEntryRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.CreateChatEntryRequest.displayName = 'proto.data.CreateChatEntryRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListChatEntriesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListChatEntriesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListChatEntriesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListChatEntriesResponse.displayName = 'proto.data.ListChatEntriesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListWorkflowsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowsRequest.displayName = 'proto.data.ListWorkflowsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowActivitiesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListWorkflowActivitiesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowActivitiesRequest.displayName = 'proto.data.ListWorkflowActivitiesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowActivitiesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListWorkflowActivitiesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListWorkflowActivitiesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowActivitiesResponse.displayName = 'proto.data.ListWorkflowActivitiesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowActivity = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.WorkflowActivity, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowActivity.displayName = 'proto.data.WorkflowActivity';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowDefinition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowDefinition.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowDefinition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowDefinition.displayName = 'proto.data.WorkflowDefinition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowNode = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowNode.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowNode, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowNode.displayName = 'proto.data.WorkflowNode';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowCondition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.WorkflowCondition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowCondition.displayName = 'proto.data.WorkflowCondition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowTransition = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowTransition.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowTransition, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowTransition.displayName = 'proto.data.WorkflowTransition';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListWorkflowsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListWorkflowsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowsResponse.displayName = 'proto.data.ListWorkflowsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentActionsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDocumentActionsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentActionsRequest.displayName = 'proto.data.ListDocumentActionsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentActionsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDocumentActionsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDocumentActionsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentActionsResponse.displayName = 'proto.data.ListDocumentActionsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentStatusesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDocumentStatusesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentStatusesRequest.displayName = 'proto.data.ListDocumentStatusesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDocumentStatusesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDocumentStatusesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDocumentStatusesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDocumentStatusesResponse.displayName = 'proto.data.ListDocumentStatusesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowLogsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListWorkflowLogsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowLogsRequest.displayName = 'proto.data.ListWorkflowLogsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowProcess = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.WorkflowProcess.repeatedFields_, null);
};
goog.inherits(proto.data.WorkflowProcess, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowProcess.displayName = 'proto.data.WorkflowProcess';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.WorkflowEvent = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.WorkflowEvent, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.WorkflowEvent.displayName = 'proto.data.WorkflowEvent';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListWorkflowLogsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListWorkflowLogsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListWorkflowLogsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListWorkflowLogsResponse.displayName = 'proto.data.ListWorkflowLogsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReportViewsRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListReportViewsRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReportViewsRequest.displayName = 'proto.data.ListReportViewsRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReportViewsResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListReportViewsResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListReportViewsResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReportViewsResponse.displayName = 'proto.data.ListReportViewsResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDrillTablesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListDrillTablesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDrillTablesRequest.displayName = 'proto.data.ListDrillTablesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListDrillTablesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListDrillTablesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListDrillTablesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListDrillTablesResponse.displayName = 'proto.data.ListDrillTablesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReferencesRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, null, null);
};
goog.inherits(proto.data.ListReferencesRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReferencesRequest.displayName = 'proto.data.ListReferencesRequest';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListReferencesResponse = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListReferencesResponse.repeatedFields_, null);
};
goog.inherits(proto.data.ListReferencesResponse, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListReferencesResponse.displayName = 'proto.data.ListReferencesResponse';
}
/**
 * Generated by JsPbCodeGenerator.
 * @param {Array=} opt_data Optional initial data array, typically from a
 * server response, or constructed directly in Javascript. The array is used
 * in place and becomes part of the constructed object. It is not cloned.
 * If no data is provided, the constructed object will be empty, but still
 * valid.
 * @extends {jspb.Message}
 * @constructor
 */
proto.data.ListGeneralInfoRequest = function(opt_data) {
  jspb.Message.initialize(this, opt_data, 0, -1, proto.data.ListGeneralInfoRequest.repeatedFields_, null);
};
goog.inherits(proto.data.ListGeneralInfoRequest, jspb.Message);
if (goog.DEBUG && !COMPILED) {
  /**
   * @public
   * @override
   */
  proto.data.ListGeneralInfoRequest.displayName = 'proto.data.ListGeneralInfoRequest';
}



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetRecordAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetRecordAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetRecordAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetRecordAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetRecordAccessRequest}
 */
proto.data.GetRecordAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetRecordAccessRequest;
  return proto.data.GetRecordAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetRecordAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetRecordAccessRequest}
 */
proto.data.GetRecordAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetRecordAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetRecordAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetRecordAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetRecordAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetRecordAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
*/
proto.data.GetRecordAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetRecordAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.GetRecordAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.GetRecordAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.GetRecordAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetRecordAccessRequest} returns this
 */
proto.data.GetRecordAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.SetRecordAccessRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.SetRecordAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.SetRecordAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.SetRecordAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetRecordAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    recordAccessesList: jspb.Message.toObjectList(msg.getRecordAccessesList(),
    proto.data.RecordAccessRole.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.SetRecordAccessRequest}
 */
proto.data.SetRecordAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.SetRecordAccessRequest;
  return proto.data.SetRecordAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.SetRecordAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.SetRecordAccessRequest}
 */
proto.data.SetRecordAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = new proto.data.RecordAccessRole;
      reader.readMessage(value,proto.data.RecordAccessRole.deserializeBinaryFromReader);
      msg.addRecordAccesses(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.SetRecordAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.SetRecordAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.SetRecordAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetRecordAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRecordAccessesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.data.RecordAccessRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.SetRecordAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
*/
proto.data.SetRecordAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.SetRecordAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.SetRecordAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.SetRecordAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.SetRecordAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated RecordAccessRole record_accesses = 5;
 * @return {!Array<!proto.data.RecordAccessRole>}
 */
proto.data.SetRecordAccessRequest.prototype.getRecordAccessesList = function() {
  return /** @type{!Array<!proto.data.RecordAccessRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecordAccessRole, 5));
};


/**
 * @param {!Array<!proto.data.RecordAccessRole>} value
 * @return {!proto.data.SetRecordAccessRequest} returns this
*/
proto.data.SetRecordAccessRequest.prototype.setRecordAccessesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.RecordAccessRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.SetRecordAccessRequest.prototype.addRecordAccesses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.RecordAccessRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.SetRecordAccessRequest} returns this
 */
proto.data.SetRecordAccessRequest.prototype.clearRecordAccessesList = function() {
  return this.setRecordAccessesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RecordAccess.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RecordAccess.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RecordAccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RecordAccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    availableRolesList: jspb.Message.toObjectList(msg.getAvailableRolesList(),
    proto.data.RecordAccessRole.toObject, includeInstance),
    currentRolesList: jspb.Message.toObjectList(msg.getCurrentRolesList(),
    proto.data.RecordAccessRole.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RecordAccess}
 */
proto.data.RecordAccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RecordAccess;
  return proto.data.RecordAccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RecordAccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RecordAccess}
 */
proto.data.RecordAccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = new proto.data.RecordAccessRole;
      reader.readMessage(value,proto.data.RecordAccessRole.deserializeBinaryFromReader);
      msg.addAvailableRoles(value);
      break;
    case 6:
      var value = new proto.data.RecordAccessRole;
      reader.readMessage(value,proto.data.RecordAccessRole.deserializeBinaryFromReader);
      msg.addCurrentRoles(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RecordAccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RecordAccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RecordAccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAvailableRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.data.RecordAccessRole.serializeBinaryToWriter
    );
  }
  f = message.getCurrentRolesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto.data.RecordAccessRole.serializeBinaryToWriter
    );
  }
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RecordAccess.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.RecordAccess.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.RecordAccess.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * repeated RecordAccessRole available_roles = 5;
 * @return {!Array<!proto.data.RecordAccessRole>}
 */
proto.data.RecordAccess.prototype.getAvailableRolesList = function() {
  return /** @type{!Array<!proto.data.RecordAccessRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecordAccessRole, 5));
};


/**
 * @param {!Array<!proto.data.RecordAccessRole>} value
 * @return {!proto.data.RecordAccess} returns this
*/
proto.data.RecordAccess.prototype.setAvailableRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.RecordAccessRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccess.prototype.addAvailableRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.RecordAccessRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.clearAvailableRolesList = function() {
  return this.setAvailableRolesList([]);
};


/**
 * repeated RecordAccessRole current_roles = 6;
 * @return {!Array<!proto.data.RecordAccessRole>}
 */
proto.data.RecordAccess.prototype.getCurrentRolesList = function() {
  return /** @type{!Array<!proto.data.RecordAccessRole>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecordAccessRole, 6));
};


/**
 * @param {!Array<!proto.data.RecordAccessRole>} value
 * @return {!proto.data.RecordAccess} returns this
*/
proto.data.RecordAccess.prototype.setCurrentRolesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.data.RecordAccessRole=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccess.prototype.addCurrentRoles = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.data.RecordAccessRole, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RecordAccess} returns this
 */
proto.data.RecordAccess.prototype.clearCurrentRolesList = function() {
  return this.setCurrentRolesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RecordAccessRole.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RecordAccessRole.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RecordAccessRole} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccessRole.toObject = function(includeInstance, msg) {
  var f, obj = {
    roleId: jspb.Message.getFieldWithDefault(msg, 1, 0),
    roleUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isActive: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isExclude: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isReadOnly: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isDependentEntities: jspb.Message.getBooleanFieldWithDefault(msg, 7, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccessRole.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RecordAccessRole;
  return proto.data.RecordAccessRole.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RecordAccessRole} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RecordAccessRole}
 */
proto.data.RecordAccessRole.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsActive(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsExclude(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsReadOnly(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDependentEntities(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RecordAccessRole.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RecordAccessRole.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RecordAccessRole} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecordAccessRole.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getRoleUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsActive();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsExclude();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsReadOnly();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsDependentEntities();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
};


/**
 * optional int32 role_id = 1;
 * @return {number}
 */
proto.data.RecordAccessRole.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string role_uuid = 2;
 * @return {string}
 */
proto.data.RecordAccessRole.prototype.getRoleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setRoleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string role_name = 3;
 * @return {string}
 */
proto.data.RecordAccessRole.prototype.getRoleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setRoleName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_active = 4;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsActive = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsActive = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_exclude = 5;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsExclude = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsExclude = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_read_only = 6;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsReadOnly = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsReadOnly = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_dependent_entities = 7;
 * @return {boolean}
 */
proto.data.RecordAccessRole.prototype.getIsDependentEntities = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RecordAccessRole} returns this
 */
proto.data.RecordAccessRole.prototype.setIsDependentEntities = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetAttachmentRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetAttachmentRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetAttachmentRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetAttachmentRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetAttachmentRequest}
 */
proto.data.GetAttachmentRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetAttachmentRequest;
  return proto.data.GetAttachmentRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetAttachmentRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetAttachmentRequest}
 */
proto.data.GetAttachmentRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetAttachmentRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetAttachmentRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetAttachmentRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetAttachmentRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetAttachmentRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetAttachmentRequest} returns this
*/
proto.data.GetAttachmentRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetAttachmentRequest} returns this
 */
proto.data.GetAttachmentRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetAttachmentRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.GetAttachmentRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetAttachmentRequest} returns this
 */
proto.data.GetAttachmentRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.GetAttachmentRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetAttachmentRequest} returns this
 */
proto.data.GetAttachmentRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.GetAttachmentRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetAttachmentRequest} returns this
 */
proto.data.GetAttachmentRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.SetPreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.SetPreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.SetPreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetPreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    containerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isForCurrentUser: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isForCurrentClient: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isForCurrentOrganization: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isForCurrentContainer: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0),
    value: jspb.Message.getFieldWithDefault(msg, 9, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.SetPreferenceRequest}
 */
proto.data.SetPreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.SetPreferenceRequest;
  return proto.data.SetPreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.SetPreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.SetPreferenceRequest}
 */
proto.data.SetPreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentUser(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentClient(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentOrganization(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentContainer(value);
      break;
    case 8:
      var value = /** @type {!proto.data.SetPreferenceRequest.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.SetPreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.SetPreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.SetPreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.SetPreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getContainerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsForCurrentUser();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsForCurrentClient();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsForCurrentOrganization();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsForCurrentContainer();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.SetPreferenceRequest.Type = {
  WINDOW: 0,
  PROCESS: 1,
  SMART_BROWSER: 2
};

/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.SetPreferenceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.SetPreferenceRequest} returns this
*/
proto.data.SetPreferenceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string container_uuid = 2;
 * @return {string}
 */
proto.data.SetPreferenceRequest.prototype.getContainerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setContainerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string column_name = 3;
 * @return {string}
 */
proto.data.SetPreferenceRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_for_current_user = 4;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_for_current_client = 5;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentClient = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentClient = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_for_current_organization = 6;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentOrganization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentOrganization = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_for_current_container = 7;
 * @return {boolean}
 */
proto.data.SetPreferenceRequest.prototype.getIsForCurrentContainer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setIsForCurrentContainer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Type type = 8;
 * @return {!proto.data.SetPreferenceRequest.Type}
 */
proto.data.SetPreferenceRequest.prototype.getType = function() {
  return /** @type {!proto.data.SetPreferenceRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.SetPreferenceRequest.Type} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional string value = 9;
 * @return {string}
 */
proto.data.SetPreferenceRequest.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.SetPreferenceRequest} returns this
 */
proto.data.SetPreferenceRequest.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DeletePreferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeletePreferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeletePreferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeletePreferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    containerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isForCurrentUser: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    isForCurrentClient: jspb.Message.getBooleanFieldWithDefault(msg, 5, false),
    isForCurrentOrganization: jspb.Message.getBooleanFieldWithDefault(msg, 6, false),
    isForCurrentContainer: jspb.Message.getBooleanFieldWithDefault(msg, 7, false),
    type: jspb.Message.getFieldWithDefault(msg, 8, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DeletePreferenceRequest}
 */
proto.data.DeletePreferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeletePreferenceRequest;
  return proto.data.DeletePreferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeletePreferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeletePreferenceRequest}
 */
proto.data.DeletePreferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentUser(value);
      break;
    case 5:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentClient(value);
      break;
    case 6:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentOrganization(value);
      break;
    case 7:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsForCurrentContainer(value);
      break;
    case 8:
      var value = /** @type {!proto.data.DeletePreferenceRequest.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DeletePreferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeletePreferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeletePreferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeletePreferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getContainerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsForCurrentUser();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getIsForCurrentClient();
  if (f) {
    writer.writeBool(
      5,
      f
    );
  }
  f = message.getIsForCurrentOrganization();
  if (f) {
    writer.writeBool(
      6,
      f
    );
  }
  f = message.getIsForCurrentContainer();
  if (f) {
    writer.writeBool(
      7,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.DeletePreferenceRequest.Type = {
  WINDOW: 0,
  PROCESS: 1,
  SMART_BROWSER: 2
};

/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeletePreferenceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
*/
proto.data.DeletePreferenceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string container_uuid = 2;
 * @return {string}
 */
proto.data.DeletePreferenceRequest.prototype.getContainerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setContainerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string column_name = 3;
 * @return {string}
 */
proto.data.DeletePreferenceRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_for_current_user = 4;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentUser = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentUser = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional bool is_for_current_client = 5;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentClient = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 5, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentClient = function(value) {
  return jspb.Message.setProto3BooleanField(this, 5, value);
};


/**
 * optional bool is_for_current_organization = 6;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentOrganization = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 6, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentOrganization = function(value) {
  return jspb.Message.setProto3BooleanField(this, 6, value);
};


/**
 * optional bool is_for_current_container = 7;
 * @return {boolean}
 */
proto.data.DeletePreferenceRequest.prototype.getIsForCurrentContainer = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 7, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setIsForCurrentContainer = function(value) {
  return jspb.Message.setProto3BooleanField(this, 7, value);
};


/**
 * optional Type type = 8;
 * @return {!proto.data.DeletePreferenceRequest.Type}
 */
proto.data.DeletePreferenceRequest.prototype.getType = function() {
  return /** @type {!proto.data.DeletePreferenceRequest.Type} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.DeletePreferenceRequest.Type} value
 * @return {!proto.data.DeletePreferenceRequest} returns this
 */
proto.data.DeletePreferenceRequest.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Preference.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Preference.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Preference} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Preference.toObject = function(includeInstance, msg) {
  var f, obj = {
    containerUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    value: jspb.Message.getFieldWithDefault(msg, 4, ""),
    type: jspb.Message.getFieldWithDefault(msg, 5, 0),
    userUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    organizationUuid: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Preference}
 */
proto.data.Preference.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Preference;
  return proto.data.Preference.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Preference} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Preference}
 */
proto.data.Preference.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setContainerUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 5:
      var value = /** @type {!proto.data.Preference.Type} */ (reader.readEnum());
      msg.setType(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setClientUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setOrganizationUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Preference.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Preference.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Preference} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Preference.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getContainerUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getType();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getOrganizationUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.Preference.Type = {
  WINDOW: 0,
  PROCESS: 1,
  SMART_BROWSER: 2
};

/**
 * optional string container_uuid = 2;
 * @return {string}
 */
proto.data.Preference.prototype.getContainerUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setContainerUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string column_name = 3;
 * @return {string}
 */
proto.data.Preference.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string value = 4;
 * @return {string}
 */
proto.data.Preference.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional Type type = 5;
 * @return {!proto.data.Preference.Type}
 */
proto.data.Preference.prototype.getType = function() {
  return /** @type {!proto.data.Preference.Type} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.data.Preference.Type} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setType = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};


/**
 * optional string user_uuid = 6;
 * @return {string}
 */
proto.data.Preference.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string client_uuid = 7;
 * @return {string}
 */
proto.data.Preference.prototype.getClientUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setClientUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string organization_uuid = 8;
 * @return {string}
 */
proto.data.Preference.prototype.getOrganizationUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Preference} returns this
 */
proto.data.Preference.prototype.setOrganizationUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetResourceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetResourceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetResourceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    resourceUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    resourceName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    width: jspb.Message.getFieldWithDefault(msg, 4, 0),
    height: jspb.Message.getFieldWithDefault(msg, 5, 0),
    operation: jspb.Message.getFieldWithDefault(msg, 6, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetResourceRequest}
 */
proto.data.GetResourceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetResourceRequest;
  return proto.data.GetResourceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetResourceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetResourceRequest}
 */
proto.data.GetResourceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setResourceName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setWidth(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setHeight(value);
      break;
    case 6:
      var value = /** @type {!proto.data.GetResourceRequest.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetResourceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetResourceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetResourceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getResourceUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getResourceName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWidth();
  if (f !== 0) {
    writer.writeInt64(
      4,
      f
    );
  }
  f = message.getHeight();
  if (f !== 0) {
    writer.writeInt64(
      5,
      f
    );
  }
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      6,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.GetResourceRequest.Operation = {
  RESIZE: 0,
  CROP: 1,
  FIX: 2,
  IDENTIFY: 3
};

/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetResourceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetResourceRequest} returns this
*/
proto.data.GetResourceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetResourceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string resource_uuid = 2;
 * @return {string}
 */
proto.data.GetResourceRequest.prototype.getResourceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.setResourceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string resource_name = 3;
 * @return {string}
 */
proto.data.GetResourceRequest.prototype.getResourceName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.setResourceName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int64 width = 4;
 * @return {number}
 */
proto.data.GetResourceRequest.prototype.getWidth = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.setWidth = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int64 height = 5;
 * @return {number}
 */
proto.data.GetResourceRequest.prototype.getHeight = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.setHeight = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional Operation operation = 6;
 * @return {!proto.data.GetResourceRequest.Operation}
 */
proto.data.GetResourceRequest.prototype.getOperation = function() {
  return /** @type {!proto.data.GetResourceRequest.Operation} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {!proto.data.GetResourceRequest.Operation} value
 * @return {!proto.data.GetResourceRequest} returns this
 */
proto.data.GetResourceRequest.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetResourceReferenceRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetResourceReferenceRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetResourceReferenceRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceReferenceRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    imageId: jspb.Message.getFieldWithDefault(msg, 2, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetResourceReferenceRequest}
 */
proto.data.GetResourceReferenceRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetResourceReferenceRequest;
  return proto.data.GetResourceReferenceRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetResourceReferenceRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetResourceReferenceRequest}
 */
proto.data.GetResourceReferenceRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setImageId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetResourceReferenceRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetResourceReferenceRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetResourceReferenceRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetResourceReferenceRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getImageId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetResourceReferenceRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetResourceReferenceRequest} returns this
*/
proto.data.GetResourceReferenceRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetResourceReferenceRequest} returns this
 */
proto.data.GetResourceReferenceRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetResourceReferenceRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 image_id = 2;
 * @return {number}
 */
proto.data.GetResourceReferenceRequest.prototype.getImageId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetResourceReferenceRequest} returns this
 */
proto.data.GetResourceReferenceRequest.prototype.setImageId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetReportOutputRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetReportOutputRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetReportOutputRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetReportOutputRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    printFormatUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    reportViewUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isSummary: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    reportName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    reportType: jspb.Message.getFieldWithDefault(msg, 6, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetReportOutputRequest}
 */
proto.data.GetReportOutputRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetReportOutputRequest;
  return proto.data.GetReportOutputRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetReportOutputRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetReportOutputRequest}
 */
proto.data.GetReportOutputRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrintFormatUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportViewUuid(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSummary(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportType(value);
      break;
    case 7:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetReportOutputRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetReportOutputRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetReportOutputRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetReportOutputRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getPrintFormatUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getReportViewUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsSummary();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getReportName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getReportType();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string print_format_uuid = 1;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getPrintFormatUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setPrintFormatUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string report_view_uuid = 2;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportViewUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportViewUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_summary = 3;
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.getIsSummary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setIsSummary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional string report_name = 5;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string report_type = 6;
 * @return {string}
 */
proto.data.GetReportOutputRequest.prototype.getReportType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.setReportType = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ClientRequest client_request = 7;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetReportOutputRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 7));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetReportOutputRequest} returns this
*/
proto.data.GetReportOutputRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Criteria criteria = 8;
 * @return {?proto.data.Criteria}
 */
proto.data.GetReportOutputRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 8));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.GetReportOutputRequest} returns this
*/
proto.data.GetReportOutputRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetReportOutputRequest} returns this
 */
proto.data.GetReportOutputRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetReportOutputRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 8) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.CreateEntityRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateEntityRequest}
 */
proto.data.CreateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateEntityRequest;
  return proto.data.CreateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateEntityRequest}
 */
proto.data.CreateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      3,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateEntityRequest} returns this
*/
proto.data.CreateEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.CreateEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * repeated KeyValue attributes = 3;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.CreateEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 3));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.CreateEntityRequest} returns this
*/
proto.data.CreateEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 3, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.CreateEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 3, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.CreateEntityRequest} returns this
 */
proto.data.CreateEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.LockPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.LockPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.LockPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LockPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.LockPrivateAccessRequest}
 */
proto.data.LockPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.LockPrivateAccessRequest;
  return proto.data.LockPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.LockPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.LockPrivateAccessRequest}
 */
proto.data.LockPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.LockPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.LockPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.LockPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LockPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.LockPrivateAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
*/
proto.data.LockPrivateAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.LockPrivateAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.LockPrivateAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.LockPrivateAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.LockPrivateAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LockPrivateAccessRequest} returns this
 */
proto.data.LockPrivateAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    tableName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetEntityRequest}
 */
proto.data.GetEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetEntityRequest;
  return proto.data.GetEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetEntityRequest}
 */
proto.data.GetEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 4:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.GetEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.GetEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string table_name = 3;
 * @return {string}
 */
proto.data.GetEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ClientRequest client_request = 4;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 4));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetEntityRequest} returns this
*/
proto.data.GetEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * optional Criteria criteria = 5;
 * @return {?proto.data.Criteria}
 */
proto.data.GetEntityRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 5));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.GetEntityRequest} returns this
*/
proto.data.GetEntityRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetEntityRequest} returns this
 */
proto.data.GetEntityRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetEntityRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 5) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetPrivateAccessRequest}
 */
proto.data.GetPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetPrivateAccessRequest;
  return proto.data.GetPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetPrivateAccessRequest}
 */
proto.data.GetPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetPrivateAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
*/
proto.data.GetPrivateAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetPrivateAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.GetPrivateAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.GetPrivateAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.GetPrivateAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetPrivateAccessRequest} returns this
 */
proto.data.GetPrivateAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UnlockPrivateAccessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UnlockPrivateAccessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UnlockPrivateAccessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UnlockPrivateAccessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UnlockPrivateAccessRequest}
 */
proto.data.UnlockPrivateAccessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UnlockPrivateAccessRequest;
  return proto.data.UnlockPrivateAccessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UnlockPrivateAccessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UnlockPrivateAccessRequest}
 */
proto.data.UnlockPrivateAccessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UnlockPrivateAccessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UnlockPrivateAccessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UnlockPrivateAccessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UnlockPrivateAccessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
*/
proto.data.UnlockPrivateAccessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UnlockPrivateAccessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.UnlockPrivateAccessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UnlockPrivateAccessRequest} returns this
 */
proto.data.UnlockPrivateAccessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PrivateAccess.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PrivateAccess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PrivateAccess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrivateAccess.toObject = function(includeInstance, msg) {
  var f, obj = {
    tableName: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    isLocked: jspb.Message.getBooleanFieldWithDefault(msg, 4, false)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PrivateAccess}
 */
proto.data.PrivateAccess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PrivateAccess;
  return proto.data.PrivateAccess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PrivateAccess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PrivateAccess}
 */
proto.data.PrivateAccess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsLocked(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PrivateAccess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PrivateAccess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PrivateAccess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PrivateAccess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getIsLocked();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
};


/**
 * optional string table_name = 1;
 * @return {string}
 */
proto.data.PrivateAccess.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.PrivateAccess.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.PrivateAccess.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool is_locked = 4;
 * @return {boolean}
 */
proto.data.PrivateAccess.prototype.getIsLocked = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.PrivateAccess} returns this
 */
proto.data.PrivateAccess.prototype.setIsLocked = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RollbackEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RollbackEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RollbackEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RollbackEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    logId: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RollbackEntityRequest}
 */
proto.data.RollbackEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RollbackEntityRequest;
  return proto.data.RollbackEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RollbackEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RollbackEntityRequest}
 */
proto.data.RollbackEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setLogId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RollbackEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RollbackEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RollbackEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RollbackEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLogId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RollbackEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RollbackEntityRequest} returns this
*/
proto.data.RollbackEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RollbackEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RollbackEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.RollbackEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.RollbackEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional int32 log_id = 5;
 * @return {number}
 */
proto.data.RollbackEntityRequest.prototype.getLogId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RollbackEntityRequest} returns this
 */
proto.data.RollbackEntityRequest.prototype.setLogId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.UpdateEntityRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdateEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdateEntityRequest}
 */
proto.data.UpdateEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateEntityRequest;
  return proto.data.UpdateEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateEntityRequest}
 */
proto.data.UpdateEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdateEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateEntityRequest} returns this
*/
proto.data.UpdateEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.UpdateEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.UpdateEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.UpdateEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated KeyValue attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.UpdateEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.UpdateEntityRequest} returns this
*/
proto.data.UpdateEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.UpdateEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.UpdateEntityRequest} returns this
 */
proto.data.UpdateEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.DeleteEntityRequest.repeatedFields_ = [5,6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DeleteEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DeleteEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DeleteEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    uuidsList: (f = jspb.Message.getRepeatedField(msg, 5)) == null ? undefined : f,
    idsList: (f = jspb.Message.getRepeatedField(msg, 6)) == null ? undefined : f
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DeleteEntityRequest}
 */
proto.data.DeleteEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DeleteEntityRequest;
  return proto.data.DeleteEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DeleteEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DeleteEntityRequest}
 */
proto.data.DeleteEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.addUuids(value);
      break;
    case 6:
      var values = /** @type {!Array<number>} */ (reader.isDelimited() ? reader.readPackedInt32() : [reader.readInt32()]);
      for (var i = 0; i < values.length; i++) {
        msg.addIds(values[i]);
      }
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DeleteEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DeleteEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DeleteEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DeleteEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUuidsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      5,
      f
    );
  }
  f = message.getIdsList();
  if (f.length > 0) {
    writer.writePackedInt32(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.DeleteEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.DeleteEntityRequest} returns this
*/
proto.data.DeleteEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.DeleteEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.DeleteEntityRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.DeleteEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.DeleteEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated string uuids = 5;
 * @return {!Array<string>}
 */
proto.data.DeleteEntityRequest.prototype.getUuidsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 5));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setUuidsList = function(value) {
  return jspb.Message.setField(this, 5, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.addUuids = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 5, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.clearUuidsList = function() {
  return this.setUuidsList([]);
};


/**
 * repeated int32 ids = 6;
 * @return {!Array<number>}
 */
proto.data.DeleteEntityRequest.prototype.getIdsList = function() {
  return /** @type {!Array<number>} */ (jspb.Message.getRepeatedField(this, 6));
};


/**
 * @param {!Array<number>} value
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.setIdsList = function(value) {
  return jspb.Message.setField(this, 6, value || []);
};


/**
 * @param {number} value
 * @param {number=} opt_index
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.addIds = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 6, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.DeleteEntityRequest} returns this
 */
proto.data.DeleteEntityRequest.prototype.clearIdsList = function() {
  return this.setIdsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListBrowserItemsRequest.repeatedFields_ = [4];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListBrowserItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListBrowserItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListBrowserItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListBrowserItemsRequest}
 */
proto.data.ListBrowserItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListBrowserItemsRequest;
  return proto.data.ListBrowserItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListBrowserItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListBrowserItemsRequest}
 */
proto.data.ListBrowserItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListBrowserItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListBrowserItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListBrowserItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      4,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.ListBrowserItemsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional ClientRequest client_request = 2;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListBrowserItemsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 2));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListBrowserItemsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * optional Criteria criteria = 3;
 * @return {?proto.data.Criteria}
 */
proto.data.ListBrowserItemsRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 3));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListBrowserItemsRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * repeated KeyValue context_attributes = 4;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListBrowserItemsRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 4));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
*/
proto.data.ListBrowserItemsRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 4, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListBrowserItemsRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 4, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListBrowserItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListBrowserItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsRequest} returns this
 */
proto.data.ListBrowserItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListBrowserItemsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListBrowserItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListBrowserItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListBrowserItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListBrowserItemsResponse}
 */
proto.data.ListBrowserItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListBrowserItemsResponse;
  return proto.data.ListBrowserItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListBrowserItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListBrowserItemsResponse}
 */
proto.data.ListBrowserItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListBrowserItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListBrowserItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListBrowserItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListBrowserItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListBrowserItemsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListBrowserItemsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
*/
proto.data.ListBrowserItemsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListBrowserItemsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListBrowserItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListBrowserItemsResponse} returns this
 */
proto.data.ListBrowserItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.UpdateBrowserEntityRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.UpdateBrowserEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.UpdateBrowserEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.UpdateBrowserEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateBrowserEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    recordId: jspb.Message.getFieldWithDefault(msg, 4, 0),
    attributesList: jspb.Message.toObjectList(msg.getAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.UpdateBrowserEntityRequest}
 */
proto.data.UpdateBrowserEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.UpdateBrowserEntityRequest;
  return proto.data.UpdateBrowserEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.UpdateBrowserEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.UpdateBrowserEntityRequest}
 */
proto.data.UpdateBrowserEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRecordId(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.UpdateBrowserEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.UpdateBrowserEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.UpdateBrowserEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.UpdateBrowserEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRecordId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
*/
proto.data.UpdateBrowserEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.UpdateBrowserEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 record_id = 4;
 * @return {number}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getRecordId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.setRecordId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated KeyValue attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.UpdateBrowserEntityRequest.prototype.getAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
*/
proto.data.UpdateBrowserEntityRequest.prototype.setAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.UpdateBrowserEntityRequest.prototype.addAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.UpdateBrowserEntityRequest} returns this
 */
proto.data.UpdateBrowserEntityRequest.prototype.clearAttributesList = function() {
  return this.setAttributesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ContextInfoValue.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ContextInfoValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ContextInfoValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ContextInfoValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    messageText: jspb.Message.getFieldWithDefault(msg, 1, ""),
    messageTip: jspb.Message.getFieldWithDefault(msg, 2, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ContextInfoValue}
 */
proto.data.ContextInfoValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ContextInfoValue;
  return proto.data.ContextInfoValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ContextInfoValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ContextInfoValue}
 */
proto.data.ContextInfoValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageText(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMessageTip(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ContextInfoValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ContextInfoValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ContextInfoValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ContextInfoValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMessageText();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMessageTip();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
};


/**
 * optional string message_text = 1;
 * @return {string}
 */
proto.data.ContextInfoValue.prototype.getMessageText = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ContextInfoValue} returns this
 */
proto.data.ContextInfoValue.prototype.setMessageText = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string message_tip = 2;
 * @return {string}
 */
proto.data.ContextInfoValue.prototype.getMessageTip = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ContextInfoValue} returns this
 */
proto.data.ContextInfoValue.prototype.setMessageTip = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.GetLookupItemRequest.repeatedFields_ = [11];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetLookupItemRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetLookupItemRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetLookupItemRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetLookupItemRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetLookupItemRequest}
 */
proto.data.GetLookupItemRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetLookupItemRequest;
  return proto.data.GetLookupItemRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetLookupItemRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetLookupItemRequest}
 */
proto.data.GetLookupItemRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetLookupItemRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetLookupItemRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetLookupItemRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetLookupItemRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.GetLookupItemRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional ClientRequest client_request = 3;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetLookupItemRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 3));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetLookupItemRequest} returns this
*/
proto.data.GetLookupItemRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetLookupItemRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string process_parameter_uuid = 4;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string field_uuid = 5;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string browse_field_uuid = 6;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string reference_uuid = 7;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string column_uuid = 8;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string column_name = 9;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string table_name = 10;
 * @return {string}
 */
proto.data.GetLookupItemRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * repeated KeyValue context_attributes = 11;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.GetLookupItemRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 11));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.GetLookupItemRequest} returns this
*/
proto.data.GetLookupItemRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.GetLookupItemRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.GetLookupItemRequest} returns this
 */
proto.data.GetLookupItemRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.GetDefaultValueRequest.repeatedFields_ = [6];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetDefaultValueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetDefaultValueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetDefaultValueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetDefaultValueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    value: (f = msg.getValue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetDefaultValueRequest}
 */
proto.data.GetDefaultValueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetDefaultValueRequest;
  return proto.data.GetDefaultValueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetDefaultValueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetDefaultValueRequest}
 */
proto.data.GetDefaultValueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetDefaultValueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetDefaultValueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetDefaultValueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetDefaultValueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetDefaultValueRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
*/
proto.data.GetDefaultValueRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetDefaultValueRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string process_parameter_uuid = 2;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field_uuid = 3;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string browse_field_uuid = 4;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string column_uuid = 5;
 * @return {string}
 */
proto.data.GetDefaultValueRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * repeated KeyValue context_attributes = 6;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.GetDefaultValueRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 6));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
*/
proto.data.GetDefaultValueRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.GetDefaultValueRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional Value value = 7;
 * @return {?proto.data.Value}
 */
proto.data.GetDefaultValueRequest.prototype.getValue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 7));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.GetDefaultValueRequest} returns this
*/
proto.data.GetDefaultValueRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetDefaultValueRequest} returns this
 */
proto.data.GetDefaultValueRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetDefaultValueRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 7) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.DefaultValue.prototype.toObject = function(opt_includeInstance) {
  return proto.data.DefaultValue.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.DefaultValue} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DefaultValue.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.DefaultValue}
 */
proto.data.DefaultValue.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.DefaultValue;
  return proto.data.DefaultValue.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.DefaultValue} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.DefaultValue}
 */
proto.data.DefaultValue.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.DefaultValue.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.DefaultValue.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.DefaultValue} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.DefaultValue.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(3, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.DefaultValue.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.DefaultValue} returns this
 */
proto.data.DefaultValue.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.DefaultValue.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.DefaultValue} returns this
 */
proto.data.DefaultValue.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * map<string, Value> values = 3;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.DefaultValue.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 3, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.DefaultValue} returns this
 */
proto.data.DefaultValue.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetContextInfoValueRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetContextInfoValueRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetContextInfoValueRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetContextInfoValueRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    query: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetContextInfoValueRequest}
 */
proto.data.GetContextInfoValueRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetContextInfoValueRequest;
  return proto.data.GetContextInfoValueRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetContextInfoValueRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetContextInfoValueRequest}
 */
proto.data.GetContextInfoValueRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setQuery(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetContextInfoValueRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetContextInfoValueRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetContextInfoValueRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetContextInfoValueRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getQuery();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetContextInfoValueRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
*/
proto.data.GetContextInfoValueRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetContextInfoValueRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.GetContextInfoValueRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.GetContextInfoValueRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string query = 4;
 * @return {string}
 */
proto.data.GetContextInfoValueRequest.prototype.getQuery = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetContextInfoValueRequest} returns this
 */
proto.data.GetContextInfoValueRequest.prototype.setQuery = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.LookupItem.prototype.toObject = function(opt_includeInstance) {
  return proto.data.LookupItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.LookupItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LookupItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.LookupItem}
 */
proto.data.LookupItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.LookupItem;
  return proto.data.LookupItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.LookupItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.LookupItem}
 */
proto.data.LookupItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 4:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.LookupItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.LookupItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.LookupItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.LookupItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(4, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.LookupItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.LookupItem.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table_name = 3;
 * @return {string}
 */
proto.data.LookupItem.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * map<string, Value> values = 4;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.LookupItem.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 4, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.LookupItem} returns this
 */
proto.data.LookupItem.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListLookupItemsRequest.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListLookupItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListLookupItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListLookupItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    searchValue: jspb.Message.getFieldWithDefault(msg, 9, ""),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    pageSize: jspb.Message.getFieldWithDefault(msg, 11, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 12, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListLookupItemsRequest}
 */
proto.data.ListLookupItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListLookupItemsRequest;
  return proto.data.ListLookupItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListLookupItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListLookupItemsRequest}
 */
proto.data.ListLookupItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListLookupItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListLookupItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListLookupItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListLookupItemsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
*/
proto.data.ListLookupItemsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListLookupItemsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string process_parameter_uuid = 2;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string field_uuid = 3;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string browse_field_uuid = 4;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string reference_uuid = 5;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string column_uuid = 6;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string column_name = 7;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string table_name = 8;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string search_value = 9;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * repeated KeyValue context_attributes = 10;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListLookupItemsRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 10));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
*/
proto.data.ListLookupItemsRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListLookupItemsRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional int32 page_size = 11;
 * @return {number}
 */
proto.data.ListLookupItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string page_token = 12;
 * @return {string}
 */
proto.data.ListLookupItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsRequest} returns this
 */
proto.data.ListLookupItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListLookupItemsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListLookupItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListLookupItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListLookupItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto.data.LookupItem.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListLookupItemsResponse}
 */
proto.data.ListLookupItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListLookupItemsResponse;
  return proto.data.ListLookupItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListLookupItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListLookupItemsResponse}
 */
proto.data.ListLookupItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.LookupItem;
      reader.readMessage(value,proto.data.LookupItem.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListLookupItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListLookupItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListLookupItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListLookupItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.LookupItem.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListLookupItemsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated LookupItem records = 2;
 * @return {!Array<!proto.data.LookupItem>}
 */
proto.data.ListLookupItemsResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.LookupItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.LookupItem, 2));
};


/**
 * @param {!Array<!proto.data.LookupItem>} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
*/
proto.data.ListLookupItemsResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.LookupItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.LookupItem}
 */
proto.data.ListLookupItemsResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.LookupItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListLookupItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListLookupItemsResponse} returns this
 */
proto.data.ListLookupItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.GetTabEntityRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetTabEntityRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetTabEntityRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetTabEntityRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetTabEntityRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    windowNo: jspb.Message.getFieldWithDefault(msg, 4, 0),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    uuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    id: jspb.Message.getFieldWithDefault(msg, 7, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetTabEntityRequest}
 */
proto.data.GetTabEntityRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetTabEntityRequest;
  return proto.data.GetTabEntityRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetTabEntityRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetTabEntityRequest}
 */
proto.data.GetTabEntityRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowNo(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetTabEntityRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetTabEntityRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetTabEntityRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetTabEntityRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWindowNo();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetTabEntityRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetTabEntityRequest} returns this
*/
proto.data.GetTabEntityRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetTabEntityRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string window_uuid = 2;
 * @return {string}
 */
proto.data.GetTabEntityRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tab_uuid = 3;
 * @return {string}
 */
proto.data.GetTabEntityRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 window_no = 4;
 * @return {number}
 */
proto.data.GetTabEntityRequest.prototype.getWindowNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setWindowNo = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated KeyValue context_attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.GetTabEntityRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.GetTabEntityRequest} returns this
*/
proto.data.GetTabEntityRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.GetTabEntityRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional string uuid = 6;
 * @return {string}
 */
proto.data.GetTabEntityRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 id = 7;
 * @return {number}
 */
proto.data.GetTabEntityRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetTabEntityRequest} returns this
 */
proto.data.GetTabEntityRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTabEntitiesRequest.repeatedFields_ = [6,7];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListTabEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTabEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTabEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    windowNo: jspb.Message.getFieldWithDefault(msg, 4, 0),
    filters: (f = msg.getFilters()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    columnsList: (f = jspb.Message.getRepeatedField(msg, 7)) == null ? undefined : f,
    searchValue: jspb.Message.getFieldWithDefault(msg, 8, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 9, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 10, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListTabEntitiesRequest}
 */
proto.data.ListTabEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTabEntitiesRequest;
  return proto.data.ListTabEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTabEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTabEntitiesRequest}
 */
proto.data.ListTabEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowNo(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 6:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListTabEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTabEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTabEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWindowNo();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      6,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      7,
      f
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListTabEntitiesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
*/
proto.data.ListTabEntitiesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTabEntitiesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string window_uuid = 2;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string tab_uuid = 3;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 window_no = 4;
 * @return {number}
 */
proto.data.ListTabEntitiesRequest.prototype.getWindowNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setWindowNo = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional Criteria filters = 5;
 * @return {?proto.data.Criteria}
 */
proto.data.ListTabEntitiesRequest.prototype.getFilters = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 5));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
*/
proto.data.ListTabEntitiesRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTabEntitiesRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * repeated KeyValue context_attributes = 6;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListTabEntitiesRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 6));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
*/
proto.data.ListTabEntitiesRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 6, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListTabEntitiesRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 6, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * repeated string columns = 7;
 * @return {!Array<string>}
 */
proto.data.ListTabEntitiesRequest.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 7));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 7, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 7, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional string search_value = 8;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional int32 page_size = 9;
 * @return {number}
 */
proto.data.ListTabEntitiesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * optional string page_token = 10;
 * @return {string}
 */
proto.data.ListTabEntitiesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesRequest} returns this
 */
proto.data.ListTabEntitiesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTabEntitiesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListTabEntitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTabEntitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTabEntitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListTabEntitiesResponse}
 */
proto.data.ListTabEntitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTabEntitiesResponse;
  return proto.data.ListTabEntitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTabEntitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTabEntitiesResponse}
 */
proto.data.ListTabEntitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListTabEntitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTabEntitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTabEntitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTabEntitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListTabEntitiesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTabEntitiesResponse} returns this
 */
proto.data.ListTabEntitiesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListTabEntitiesResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListTabEntitiesResponse} returns this
*/
proto.data.ListTabEntitiesResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListTabEntitiesResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTabEntitiesResponse} returns this
 */
proto.data.ListTabEntitiesResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListTabEntitiesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTabEntitiesResponse} returns this
 */
proto.data.ListTabEntitiesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListEntitiesRequest.repeatedFields_ = [3];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    columnsList: (f = jspb.Message.getRepeatedField(msg, 3)) == null ? undefined : f,
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntitiesRequest}
 */
proto.data.ListEntitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntitiesRequest;
  return proto.data.ListEntitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntitiesRequest}
 */
proto.data.ListEntitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.addColumns(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getColumnsList();
  if (f.length > 0) {
    writer.writeRepeatedString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListEntitiesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListEntitiesRequest} returns this
*/
proto.data.ListEntitiesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntitiesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional Criteria criteria = 2;
 * @return {?proto.data.Criteria}
 */
proto.data.ListEntitiesRequest.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 2));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListEntitiesRequest} returns this
*/
proto.data.ListEntitiesRequest.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntitiesRequest.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 2) != null;
};


/**
 * repeated string columns = 3;
 * @return {!Array<string>}
 */
proto.data.ListEntitiesRequest.prototype.getColumnsList = function() {
  return /** @type {!Array<string>} */ (jspb.Message.getRepeatedField(this, 3));
};


/**
 * @param {!Array<string>} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setColumnsList = function(value) {
  return jspb.Message.setField(this, 3, value || []);
};


/**
 * @param {string} value
 * @param {number=} opt_index
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.addColumns = function(value, opt_index) {
  return jspb.Message.addToRepeatedField(this, 3, value, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.clearColumnsList = function() {
  return this.setColumnsList([]);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListEntitiesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListEntitiesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntitiesRequest} returns this
 */
proto.data.ListEntitiesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListEntitiesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recordsList: jspb.Message.toObjectList(msg.getRecordsList(),
    proto_base_data_type_pb.Entity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntitiesResponse}
 */
proto.data.ListEntitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntitiesResponse;
  return proto.data.ListEntitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntitiesResponse}
 */
proto.data.ListEntitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Entity;
      reader.readMessage(value,proto_base_data_type_pb.Entity.deserializeBinaryFromReader);
      msg.addRecords(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecordsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Entity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListEntitiesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Entity records = 2;
 * @return {!Array<!proto.data.Entity>}
 */
proto.data.ListEntitiesResponse.prototype.getRecordsList = function() {
  return /** @type{!Array<!proto.data.Entity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Entity, 2));
};


/**
 * @param {!Array<!proto.data.Entity>} value
 * @return {!proto.data.ListEntitiesResponse} returns this
*/
proto.data.ListEntitiesResponse.prototype.setRecordsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Entity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Entity}
 */
proto.data.ListEntitiesResponse.prototype.addRecords = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Entity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.clearRecordsList = function() {
  return this.setRecordsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListEntitiesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntitiesResponse} returns this
 */
proto.data.ListEntitiesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RunCalloutRequest.repeatedFields_ = [10];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RunCalloutRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RunCalloutRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RunCalloutRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunCalloutRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    callout: jspb.Message.getFieldWithDefault(msg, 5, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    oldValue: (f = msg.getOldValue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f),
    value: (f = msg.getValue()) && proto_base_data_type_pb.Value.toObject(includeInstance, f),
    windowNo: jspb.Message.getFieldWithDefault(msg, 9, 0),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RunCalloutRequest}
 */
proto.data.RunCalloutRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RunCalloutRequest;
  return proto.data.RunCalloutRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RunCalloutRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RunCalloutRequest}
 */
proto.data.RunCalloutRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCallout(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setOldValue(value);
      break;
    case 8:
      var value = new proto_base_data_type_pb.Value;
      reader.readMessage(value,proto_base_data_type_pb.Value.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setWindowNo(value);
      break;
    case 10:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RunCalloutRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RunCalloutRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RunCalloutRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunCalloutRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCallout();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getOldValue();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      8,
      f,
      proto_base_data_type_pb.Value.serializeBinaryToWriter
    );
  }
  f = message.getWindowNo();
  if (f !== 0) {
    writer.writeInt32(
      9,
      f
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      10,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RunCalloutRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string window_uuid = 3;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string tab_uuid = 4;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string callout = 5;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getCallout = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setCallout = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string column_name = 6;
 * @return {string}
 */
proto.data.RunCalloutRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Value old_value = 7;
 * @return {?proto.data.Value}
 */
proto.data.RunCalloutRequest.prototype.getOldValue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 7));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setOldValue = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearOldValue = function() {
  return this.setOldValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasOldValue = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * optional Value value = 8;
 * @return {?proto.data.Value}
 */
proto.data.RunCalloutRequest.prototype.getValue = function() {
  return /** @type{?proto.data.Value} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Value, 8));
};


/**
 * @param {?proto.data.Value|undefined} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 8, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunCalloutRequest.prototype.hasValue = function() {
  return jspb.Message.getField(this, 8) != null;
};


/**
 * optional int32 window_no = 9;
 * @return {number}
 */
proto.data.RunCalloutRequest.prototype.getWindowNo = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.setWindowNo = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};


/**
 * repeated KeyValue context_attributes = 10;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.RunCalloutRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 10));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.RunCalloutRequest} returns this
*/
proto.data.RunCalloutRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 10, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.RunCalloutRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 10, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunCalloutRequest} returns this
 */
proto.data.RunCalloutRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Callout.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Callout.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Callout} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Callout.toObject = function(includeInstance, msg) {
  var f, obj = {
    result: jspb.Message.getFieldWithDefault(msg, 1, ""),
    valuesMap: (f = msg.getValuesMap()) ? f.toObject(includeInstance, proto.data.Value.toObject) : []
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Callout}
 */
proto.data.Callout.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Callout;
  return proto.data.Callout.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Callout} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Callout}
 */
proto.data.Callout.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setResult(value);
      break;
    case 2:
      var value = msg.getValuesMap();
      reader.readMessage(value, function(message, reader) {
        jspb.Map.deserializeBinary(message, reader, jspb.BinaryReader.prototype.readString, jspb.BinaryReader.prototype.readMessage, proto.data.Value.deserializeBinaryFromReader, "", new proto.data.Value());
         });
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Callout.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Callout.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Callout} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Callout.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getResult();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValuesMap(true);
  if (f && f.getLength() > 0) {
    f.serializeBinary(2, writer, jspb.BinaryWriter.prototype.writeString, jspb.BinaryWriter.prototype.writeMessage, proto.data.Value.serializeBinaryToWriter);
  }
};


/**
 * optional string result = 1;
 * @return {string}
 */
proto.data.Callout.prototype.getResult = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Callout} returns this
 */
proto.data.Callout.prototype.setResult = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * map<string, Value> values = 2;
 * @param {boolean=} opt_noLazyCreate Do not create the map if
 * empty, instead returning `undefined`
 * @return {!jspb.Map<string,!proto.data.Value>}
 */
proto.data.Callout.prototype.getValuesMap = function(opt_noLazyCreate) {
  return /** @type {!jspb.Map<string,!proto.data.Value>} */ (
      jspb.Message.getMapField(this, 2, opt_noLazyCreate,
      proto.data.Value));
};


/**
 * Clears values from the map. The map will be non-null.
 * @return {!proto.data.Callout} returns this
 */
proto.data.Callout.prototype.clearValuesMap = function() {
  this.getValuesMap().clear();
  return this;};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.RunBusinessProcessRequest.repeatedFields_ = [11,12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RunBusinessProcessRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RunBusinessProcessRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RunBusinessProcessRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunBusinessProcessRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    processUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    id: jspb.Message.getFieldWithDefault(msg, 5, 0),
    tableSelectedId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    reportType: jspb.Message.getFieldWithDefault(msg, 7, ""),
    printFormatUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    reportViewUuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    isSummary: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    parametersList: jspb.Message.toObjectList(msg.getParametersList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    selectionsList: jspb.Message.toObjectList(msg.getSelectionsList(),
    proto_base_data_type_pb.KeyValueSelection.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RunBusinessProcessRequest}
 */
proto.data.RunBusinessProcessRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RunBusinessProcessRequest;
  return proto.data.RunBusinessProcessRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RunBusinessProcessRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RunBusinessProcessRequest}
 */
proto.data.RunBusinessProcessRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTableSelectedId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportType(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPrintFormatUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportViewUuid(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsSummary(value);
      break;
    case 11:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addParameters(value);
      break;
    case 12:
      var value = new proto_base_data_type_pb.KeyValueSelection;
      reader.readMessage(value,proto_base_data_type_pb.KeyValueSelection.deserializeBinaryFromReader);
      msg.addSelections(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RunBusinessProcessRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RunBusinessProcessRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RunBusinessProcessRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RunBusinessProcessRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getTableSelectedId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getReportType();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getPrintFormatUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getReportViewUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getIsSummary();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getParametersList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      11,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getSelectionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto_base_data_type_pb.KeyValueSelection.serializeBinaryToWriter
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.RunBusinessProcessRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.RunBusinessProcessRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string process_uuid = 3;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getProcessUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setProcessUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 id = 5;
 * @return {number}
 */
proto.data.RunBusinessProcessRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 table_selected_id = 6;
 * @return {number}
 */
proto.data.RunBusinessProcessRequest.prototype.getTableSelectedId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setTableSelectedId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string report_type = 7;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getReportType = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setReportType = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string print_format_uuid = 8;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getPrintFormatUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setPrintFormatUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string report_view_uuid = 9;
 * @return {string}
 */
proto.data.RunBusinessProcessRequest.prototype.getReportViewUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setReportViewUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool is_summary = 10;
 * @return {boolean}
 */
proto.data.RunBusinessProcessRequest.prototype.getIsSummary = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.setIsSummary = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * repeated KeyValue parameters = 11;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.RunBusinessProcessRequest.prototype.getParametersList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 11));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setParametersList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 11, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.RunBusinessProcessRequest.prototype.addParameters = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 11, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearParametersList = function() {
  return this.setParametersList([]);
};


/**
 * repeated KeyValueSelection selections = 12;
 * @return {!Array<!proto.data.KeyValueSelection>}
 */
proto.data.RunBusinessProcessRequest.prototype.getSelectionsList = function() {
  return /** @type{!Array<!proto.data.KeyValueSelection>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValueSelection, 12));
};


/**
 * @param {!Array<!proto.data.KeyValueSelection>} value
 * @return {!proto.data.RunBusinessProcessRequest} returns this
*/
proto.data.RunBusinessProcessRequest.prototype.setSelectionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.data.KeyValueSelection=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValueSelection}
 */
proto.data.RunBusinessProcessRequest.prototype.addSelections = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.data.KeyValueSelection, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.RunBusinessProcessRequest} returns this
 */
proto.data.RunBusinessProcessRequest.prototype.clearSelectionsList = function() {
  return this.setSelectionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListProcessLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListProcessLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListProcessLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    instanceUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    id: jspb.Message.getFieldWithDefault(msg, 5, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListProcessLogsRequest}
 */
proto.data.ListProcessLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListProcessLogsRequest;
  return proto.data.ListProcessLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListProcessLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListProcessLogsRequest}
 */
proto.data.ListProcessLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setInstanceUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListProcessLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListProcessLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListProcessLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getInstanceUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListProcessLogsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
*/
proto.data.ListProcessLogsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListProcessLogsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string instance_uuid = 3;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getInstanceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setInstanceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string table_name = 4;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 id = 5;
 * @return {number}
 */
proto.data.ListProcessLogsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string uuid = 6;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 page_size = 7;
 * @return {number}
 */
proto.data.ListProcessLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string page_token = 8;
 * @return {string}
 */
proto.data.ListProcessLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsRequest} returns this
 */
proto.data.ListProcessLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListProcessLogsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListProcessLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListProcessLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListProcessLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    processLogsList: jspb.Message.toObjectList(msg.getProcessLogsList(),
    proto_base_data_type_pb.ProcessLog.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListProcessLogsResponse}
 */
proto.data.ListProcessLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListProcessLogsResponse;
  return proto.data.ListProcessLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListProcessLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListProcessLogsResponse}
 */
proto.data.ListProcessLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.ProcessLog;
      reader.readMessage(value,proto_base_data_type_pb.ProcessLog.deserializeBinaryFromReader);
      msg.addProcessLogs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListProcessLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListProcessLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListProcessLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListProcessLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getProcessLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.ProcessLog.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListProcessLogsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListProcessLogsResponse} returns this
 */
proto.data.ListProcessLogsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ProcessLog process_logs = 2;
 * @return {!Array<!proto.data.ProcessLog>}
 */
proto.data.ListProcessLogsResponse.prototype.getProcessLogsList = function() {
  return /** @type{!Array<!proto.data.ProcessLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.ProcessLog, 2));
};


/**
 * @param {!Array<!proto.data.ProcessLog>} value
 * @return {!proto.data.ListProcessLogsResponse} returns this
*/
proto.data.ListProcessLogsResponse.prototype.setProcessLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ProcessLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ProcessLog}
 */
proto.data.ListProcessLogsResponse.prototype.addProcessLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ProcessLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListProcessLogsResponse} returns this
 */
proto.data.ListProcessLogsResponse.prototype.clearProcessLogsList = function() {
  return this.setProcessLogsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListProcessLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListProcessLogsResponse} returns this
 */
proto.data.ListProcessLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecentItemsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecentItemsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecentItemsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    currentSession: jspb.Message.getBooleanFieldWithDefault(msg, 4, false),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecentItemsRequest}
 */
proto.data.ListRecentItemsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecentItemsRequest;
  return proto.data.ListRecentItemsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecentItemsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecentItemsRequest}
 */
proto.data.ListRecentItemsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleUuid(value);
      break;
    case 4:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setCurrentSession(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecentItemsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecentItemsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecentItemsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getCurrentSession();
  if (f) {
    writer.writeBool(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListRecentItemsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
*/
proto.data.ListRecentItemsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListRecentItemsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListRecentItemsRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string role_uuid = 3;
 * @return {string}
 */
proto.data.ListRecentItemsRequest.prototype.getRoleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setRoleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional bool current_session = 4;
 * @return {boolean}
 */
proto.data.ListRecentItemsRequest.prototype.getCurrentSession = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 4, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setCurrentSession = function(value) {
  return jspb.Message.setProto3BooleanField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListRecentItemsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListRecentItemsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsRequest} returns this
 */
proto.data.ListRecentItemsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.RecentItem.prototype.toObject = function(opt_includeInstance) {
  return proto.data.RecentItem.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.RecentItem} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecentItem.toObject = function(includeInstance, msg) {
  var f, obj = {
    menuUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menuName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    menuDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tabUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tableId: jspb.Message.getFieldWithDefault(msg, 6, 0),
    tableName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    id: jspb.Message.getFieldWithDefault(msg, 8, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    displayName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    updated: jspb.Message.getFieldWithDefault(msg, 11, 0),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 12, ""),
    action: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.RecentItem}
 */
proto.data.RecentItem.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.RecentItem;
  return proto.data.RecentItem.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.RecentItem} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.RecentItem}
 */
proto.data.RecentItem.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTabUuid(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setTableId(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 8:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setDisplayName(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setUpdated(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.RecentItem.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.RecentItem.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.RecentItem} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.RecentItem.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenuUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenuName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMenuDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTabUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTableId();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      8,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getDisplayName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getUpdated();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional string menu_uuid = 1;
 * @return {string}
 */
proto.data.RecentItem.prototype.getMenuUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setMenuUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string menu_name = 2;
 * @return {string}
 */
proto.data.RecentItem.prototype.getMenuName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setMenuName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string menu_description = 3;
 * @return {string}
 */
proto.data.RecentItem.prototype.getMenuDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setMenuDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string window_uuid = 4;
 * @return {string}
 */
proto.data.RecentItem.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string tab_uuid = 5;
 * @return {string}
 */
proto.data.RecentItem.prototype.getTabUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setTabUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 table_id = 6;
 * @return {number}
 */
proto.data.RecentItem.prototype.getTableId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setTableId = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string table_name = 7;
 * @return {string}
 */
proto.data.RecentItem.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional int32 id = 8;
 * @return {number}
 */
proto.data.RecentItem.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 8, value);
};


/**
 * optional string uuid = 9;
 * @return {string}
 */
proto.data.RecentItem.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string display_name = 10;
 * @return {string}
 */
proto.data.RecentItem.prototype.getDisplayName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setDisplayName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 updated = 11;
 * @return {number}
 */
proto.data.RecentItem.prototype.getUpdated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setUpdated = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string reference_uuid = 12;
 * @return {string}
 */
proto.data.RecentItem.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string action = 13;
 * @return {string}
 */
proto.data.RecentItem.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.RecentItem} returns this
 */
proto.data.RecentItem.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListRecentItemsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListRecentItemsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListRecentItemsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListRecentItemsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    recentItemsList: jspb.Message.toObjectList(msg.getRecentItemsList(),
    proto.data.RecentItem.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListRecentItemsResponse}
 */
proto.data.ListRecentItemsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListRecentItemsResponse;
  return proto.data.ListRecentItemsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListRecentItemsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListRecentItemsResponse}
 */
proto.data.ListRecentItemsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.RecentItem;
      reader.readMessage(value,proto.data.RecentItem.deserializeBinaryFromReader);
      msg.addRecentItems(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListRecentItemsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListRecentItemsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListRecentItemsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListRecentItemsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getRecentItemsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.RecentItem.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListRecentItemsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListRecentItemsResponse} returns this
 */
proto.data.ListRecentItemsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecentItem recent_items = 2;
 * @return {!Array<!proto.data.RecentItem>}
 */
proto.data.ListRecentItemsResponse.prototype.getRecentItemsList = function() {
  return /** @type{!Array<!proto.data.RecentItem>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.RecentItem, 2));
};


/**
 * @param {!Array<!proto.data.RecentItem>} value
 * @return {!proto.data.ListRecentItemsResponse} returns this
*/
proto.data.ListRecentItemsResponse.prototype.setRecentItemsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.RecentItem=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecentItem}
 */
proto.data.ListRecentItemsResponse.prototype.addRecentItems = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.RecentItem, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListRecentItemsResponse} returns this
 */
proto.data.ListRecentItemsResponse.prototype.clearRecentItemsList = function() {
  return this.setRecentItemsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListRecentItemsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListRecentItemsResponse} returns this
 */
proto.data.ListRecentItemsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListFavoritesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListFavoritesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListFavoritesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListFavoritesRequest}
 */
proto.data.ListFavoritesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListFavoritesRequest;
  return proto.data.ListFavoritesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListFavoritesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListFavoritesRequest}
 */
proto.data.ListFavoritesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListFavoritesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListFavoritesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListFavoritesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListFavoritesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListFavoritesRequest} returns this
*/
proto.data.ListFavoritesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListFavoritesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListFavoritesRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 user_id = 3;
 * @return {number}
 */
proto.data.ListFavoritesRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListFavoritesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListFavoritesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesRequest} returns this
 */
proto.data.ListFavoritesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Favorite.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Favorite.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Favorite} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Favorite.toObject = function(includeInstance, msg) {
  var f, obj = {
    menuUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    menuName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    menuDescription: jspb.Message.getFieldWithDefault(msg, 3, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    action: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Favorite}
 */
proto.data.Favorite.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Favorite;
  return proto.data.Favorite.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Favorite} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Favorite}
 */
proto.data.Favorite.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setMenuDescription(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setAction(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Favorite.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Favorite.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Favorite} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Favorite.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getMenuUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getMenuName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getMenuDescription();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getAction();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional string menu_uuid = 1;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string menu_name = 2;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string menu_description = 3;
 * @return {string}
 */
proto.data.Favorite.prototype.getMenuDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setMenuDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string reference_uuid = 4;
 * @return {string}
 */
proto.data.Favorite.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string action = 5;
 * @return {string}
 */
proto.data.Favorite.prototype.getAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Favorite} returns this
 */
proto.data.Favorite.prototype.setAction = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListFavoritesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListFavoritesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListFavoritesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListFavoritesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    favoritesList: jspb.Message.toObjectList(msg.getFavoritesList(),
    proto.data.Favorite.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListFavoritesResponse}
 */
proto.data.ListFavoritesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListFavoritesResponse;
  return proto.data.ListFavoritesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListFavoritesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListFavoritesResponse}
 */
proto.data.ListFavoritesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.Favorite;
      reader.readMessage(value,proto.data.Favorite.deserializeBinaryFromReader);
      msg.addFavorites(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListFavoritesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListFavoritesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListFavoritesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListFavoritesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getFavoritesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.Favorite.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListFavoritesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Favorite favorites = 2;
 * @return {!Array<!proto.data.Favorite>}
 */
proto.data.ListFavoritesResponse.prototype.getFavoritesList = function() {
  return /** @type{!Array<!proto.data.Favorite>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.Favorite, 2));
};


/**
 * @param {!Array<!proto.data.Favorite>} value
 * @return {!proto.data.ListFavoritesResponse} returns this
*/
proto.data.ListFavoritesResponse.prototype.setFavoritesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Favorite=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Favorite}
 */
proto.data.ListFavoritesResponse.prototype.addFavorites = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Favorite, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.clearFavoritesList = function() {
  return this.setFavoritesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListFavoritesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListFavoritesResponse} returns this
 */
proto.data.ListFavoritesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListTranslationsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTranslationsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTranslationsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    language: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListTranslationsRequest}
 */
proto.data.ListTranslationsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTranslationsRequest;
  return proto.data.ListTranslationsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTranslationsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTranslationsRequest}
 */
proto.data.ListTranslationsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setLanguage(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListTranslationsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTranslationsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTranslationsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getLanguage();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListTranslationsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListTranslationsRequest} returns this
*/
proto.data.ListTranslationsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListTranslationsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.ListTranslationsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string language = 5;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getLanguage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setLanguage = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListTranslationsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListTranslationsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsRequest} returns this
 */
proto.data.ListTranslationsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListTranslationsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListTranslationsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListTranslationsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListTranslationsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    translationsList: jspb.Message.toObjectList(msg.getTranslationsList(),
    proto_base_data_type_pb.Translation.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListTranslationsResponse}
 */
proto.data.ListTranslationsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListTranslationsResponse;
  return proto.data.ListTranslationsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListTranslationsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListTranslationsResponse}
 */
proto.data.ListTranslationsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Translation;
      reader.readMessage(value,proto_base_data_type_pb.Translation.deserializeBinaryFromReader);
      msg.addTranslations(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListTranslationsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListTranslationsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListTranslationsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListTranslationsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getTranslationsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Translation.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListTranslationsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Translation translations = 2;
 * @return {!Array<!proto.data.Translation>}
 */
proto.data.ListTranslationsResponse.prototype.getTranslationsList = function() {
  return /** @type{!Array<!proto.data.Translation>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Translation, 2));
};


/**
 * @param {!Array<!proto.data.Translation>} value
 * @return {!proto.data.ListTranslationsResponse} returns this
*/
proto.data.ListTranslationsResponse.prototype.setTranslationsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Translation=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Translation}
 */
proto.data.ListTranslationsResponse.prototype.addTranslations = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Translation, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.clearTranslationsList = function() {
  return this.setTranslationsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListTranslationsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListTranslationsResponse} returns this
 */
proto.data.ListTranslationsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPendingDocumentsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPendingDocumentsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPendingDocumentsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    userId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    roleUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    roleId: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPendingDocumentsRequest}
 */
proto.data.ListPendingDocumentsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPendingDocumentsRequest;
  return proto.data.ListPendingDocumentsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPendingDocumentsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPendingDocumentsRequest}
 */
proto.data.ListPendingDocumentsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setUserId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPendingDocumentsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPendingDocumentsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPendingDocumentsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getUserId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getRoleUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPendingDocumentsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
*/
proto.data.ListPendingDocumentsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPendingDocumentsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 user_id = 3;
 * @return {number}
 */
proto.data.ListPendingDocumentsRequest.prototype.getUserId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setUserId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string role_uuid = 4;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getRoleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setRoleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 role_id = 5;
 * @return {number}
 */
proto.data.ListPendingDocumentsRequest.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListPendingDocumentsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListPendingDocumentsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsRequest} returns this
 */
proto.data.ListPendingDocumentsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.PendingDocument.prototype.toObject = function(opt_includeInstance) {
  return proto.data.PendingDocument.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.PendingDocument} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PendingDocument.toObject = function(includeInstance, msg) {
  var f, obj = {
    windowUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    formUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    documentName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    documentDescription: jspb.Message.getFieldWithDefault(msg, 4, ""),
    sequence: jspb.Message.getFieldWithDefault(msg, 5, 0),
    recordCount: jspb.Message.getFieldWithDefault(msg, 6, 0),
    criteria: (f = msg.getCriteria()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.PendingDocument}
 */
proto.data.PendingDocument.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.PendingDocument;
  return proto.data.PendingDocument.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.PendingDocument} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.PendingDocument}
 */
proto.data.PendingDocument.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setFormUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentDescription(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setCriteria(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.PendingDocument.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.PendingDocument.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.PendingDocument} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.PendingDocument.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getFormUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getDocumentName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDocumentDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      6,
      f
    );
  }
  f = message.getCriteria();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
};


/**
 * optional string window_uuid = 1;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string form_uuid = 2;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getFormUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setFormUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string document_name = 3;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getDocumentName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setDocumentName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string document_description = 4;
 * @return {string}
 */
proto.data.PendingDocument.prototype.getDocumentDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setDocumentDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 sequence = 5;
 * @return {number}
 */
proto.data.PendingDocument.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional int64 record_count = 6;
 * @return {number}
 */
proto.data.PendingDocument.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional Criteria criteria = 7;
 * @return {?proto.data.Criteria}
 */
proto.data.PendingDocument.prototype.getCriteria = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 7));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.PendingDocument} returns this
*/
proto.data.PendingDocument.prototype.setCriteria = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.PendingDocument} returns this
 */
proto.data.PendingDocument.prototype.clearCriteria = function() {
  return this.setCriteria(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.PendingDocument.prototype.hasCriteria = function() {
  return jspb.Message.getField(this, 7) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPendingDocumentsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPendingDocumentsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPendingDocumentsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPendingDocumentsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    pendingDocumentsList: jspb.Message.toObjectList(msg.getPendingDocumentsList(),
    proto.data.PendingDocument.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPendingDocumentsResponse}
 */
proto.data.ListPendingDocumentsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPendingDocumentsResponse;
  return proto.data.ListPendingDocumentsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPendingDocumentsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPendingDocumentsResponse}
 */
proto.data.ListPendingDocumentsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.PendingDocument;
      reader.readMessage(value,proto.data.PendingDocument.deserializeBinaryFromReader);
      msg.addPendingDocuments(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPendingDocumentsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPendingDocumentsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPendingDocumentsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPendingDocumentsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPendingDocumentsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.PendingDocument.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListPendingDocumentsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PendingDocument pending_documents = 2;
 * @return {!Array<!proto.data.PendingDocument>}
 */
proto.data.ListPendingDocumentsResponse.prototype.getPendingDocumentsList = function() {
  return /** @type{!Array<!proto.data.PendingDocument>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.PendingDocument, 2));
};


/**
 * @param {!Array<!proto.data.PendingDocument>} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
*/
proto.data.ListPendingDocumentsResponse.prototype.setPendingDocumentsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.PendingDocument=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.PendingDocument}
 */
proto.data.ListPendingDocumentsResponse.prototype.addPendingDocuments = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.PendingDocument, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.clearPendingDocumentsList = function() {
  return this.setPendingDocumentsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPendingDocumentsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPendingDocumentsResponse} returns this
 */
proto.data.ListPendingDocumentsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.GetChartRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.GetChartRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.GetChartRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetChartRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.GetChartRequest}
 */
proto.data.GetChartRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.GetChartRequest;
  return proto.data.GetChartRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.GetChartRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.GetChartRequest}
 */
proto.data.GetChartRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.GetChartRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.GetChartRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.GetChartRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.GetChartRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.GetChartRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.GetChartRequest} returns this
*/
proto.data.GetChartRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.GetChartRequest} returns this
 */
proto.data.GetChartRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.GetChartRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.GetChartRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.GetChartRequest} returns this
 */
proto.data.GetChartRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.GetChartRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.GetChartRequest} returns this
 */
proto.data.GetChartRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.Chart.repeatedFields_ = [8,9];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.Chart.prototype.toObject = function(opt_includeInstance) {
  return proto.data.Chart.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.Chart} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Chart.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    xAxisLabel: jspb.Message.getFieldWithDefault(msg, 5, ""),
    yAxisLabel: jspb.Message.getFieldWithDefault(msg, 6, ""),
    measureTarget: (f = msg.getMeasureTarget()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f),
    colorSchemasList: jspb.Message.toObjectList(msg.getColorSchemasList(),
    proto.data.ColorSchema.toObject, includeInstance),
    seriesList: jspb.Message.toObjectList(msg.getSeriesList(),
    proto.data.ChartSerie.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.Chart}
 */
proto.data.Chart.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.Chart;
  return proto.data.Chart.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.Chart} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.Chart}
 */
proto.data.Chart.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setXAxisLabel(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setYAxisLabel(value);
      break;
    case 7:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setMeasureTarget(value);
      break;
    case 8:
      var value = new proto.data.ColorSchema;
      reader.readMessage(value,proto.data.ColorSchema.deserializeBinaryFromReader);
      msg.addColorSchemas(value);
      break;
    case 9:
      var value = new proto.data.ChartSerie;
      reader.readMessage(value,proto.data.ChartSerie.deserializeBinaryFromReader);
      msg.addSeries(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.Chart.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.Chart.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.Chart} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.Chart.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getXAxisLabel();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getYAxisLabel();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getMeasureTarget();
  if (f != null) {
    writer.writeMessage(
      7,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
  f = message.getColorSchemasList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      8,
      f,
      proto.data.ColorSchema.serializeBinaryToWriter
    );
  }
  f = message.getSeriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      9,
      f,
      proto.data.ChartSerie.serializeBinaryToWriter
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.Chart.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.Chart.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.Chart.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.Chart.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string x_axis_label = 5;
 * @return {string}
 */
proto.data.Chart.prototype.getXAxisLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setXAxisLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string y_axis_label = 6;
 * @return {string}
 */
proto.data.Chart.prototype.getYAxisLabel = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.setYAxisLabel = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional Decimal measure_target = 7;
 * @return {?proto.data.Decimal}
 */
proto.data.Chart.prototype.getMeasureTarget = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 7));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.Chart} returns this
*/
proto.data.Chart.prototype.setMeasureTarget = function(value) {
  return jspb.Message.setWrapperField(this, 7, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.clearMeasureTarget = function() {
  return this.setMeasureTarget(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.Chart.prototype.hasMeasureTarget = function() {
  return jspb.Message.getField(this, 7) != null;
};


/**
 * repeated ColorSchema color_schemas = 8;
 * @return {!Array<!proto.data.ColorSchema>}
 */
proto.data.Chart.prototype.getColorSchemasList = function() {
  return /** @type{!Array<!proto.data.ColorSchema>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ColorSchema, 8));
};


/**
 * @param {!Array<!proto.data.ColorSchema>} value
 * @return {!proto.data.Chart} returns this
*/
proto.data.Chart.prototype.setColorSchemasList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 8, value);
};


/**
 * @param {!proto.data.ColorSchema=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ColorSchema}
 */
proto.data.Chart.prototype.addColorSchemas = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 8, opt_value, proto.data.ColorSchema, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.clearColorSchemasList = function() {
  return this.setColorSchemasList([]);
};


/**
 * repeated ChartSerie series = 9;
 * @return {!Array<!proto.data.ChartSerie>}
 */
proto.data.Chart.prototype.getSeriesList = function() {
  return /** @type{!Array<!proto.data.ChartSerie>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ChartSerie, 9));
};


/**
 * @param {!Array<!proto.data.ChartSerie>} value
 * @return {!proto.data.Chart} returns this
*/
proto.data.Chart.prototype.setSeriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 9, value);
};


/**
 * @param {!proto.data.ChartSerie=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ChartSerie}
 */
proto.data.Chart.prototype.addSeries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 9, opt_value, proto.data.ChartSerie, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.Chart} returns this
 */
proto.data.Chart.prototype.clearSeriesList = function() {
  return this.setSeriesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ChartSerie.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ChartSerie.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ChartSerie.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ChartSerie} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartSerie.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    dataSetList: jspb.Message.toObjectList(msg.getDataSetList(),
    proto.data.ChartData.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ChartSerie}
 */
proto.data.ChartSerie.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ChartSerie;
  return proto.data.ChartSerie.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ChartSerie} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ChartSerie}
 */
proto.data.ChartSerie.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto.data.ChartData;
      reader.readMessage(value,proto.data.ChartData.deserializeBinaryFromReader);
      msg.addDataSet(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ChartSerie.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ChartSerie.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ChartSerie} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartSerie.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDataSetList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.ChartData.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.data.ChartSerie.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChartSerie} returns this
 */
proto.data.ChartSerie.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * repeated ChartData data_set = 2;
 * @return {!Array<!proto.data.ChartData>}
 */
proto.data.ChartSerie.prototype.getDataSetList = function() {
  return /** @type{!Array<!proto.data.ChartData>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ChartData, 2));
};


/**
 * @param {!Array<!proto.data.ChartData>} value
 * @return {!proto.data.ChartSerie} returns this
*/
proto.data.ChartSerie.prototype.setDataSetList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ChartData=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ChartData}
 */
proto.data.ChartSerie.prototype.addDataSet = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ChartData, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ChartSerie} returns this
 */
proto.data.ChartSerie.prototype.clearDataSetList = function() {
  return this.setDataSetList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ChartData.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ChartData.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ChartData} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartData.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: (f = msg.getValue()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ChartData}
 */
proto.data.ChartData.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ChartData;
  return proto.data.ChartData.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ChartData} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ChartData}
 */
proto.data.ChartData.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setValue(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ChartData.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ChartData.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ChartData} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChartData.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f != null) {
    writer.writeMessage(
      2,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.data.ChartData.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChartData} returns this
 */
proto.data.ChartData.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional Decimal value = 2;
 * @return {?proto.data.Decimal}
 */
proto.data.ChartData.prototype.getValue = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 2));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.ChartData} returns this
*/
proto.data.ChartData.prototype.setValue = function(value) {
  return jspb.Message.setWrapperField(this, 2, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ChartData} returns this
 */
proto.data.ChartData.prototype.clearValue = function() {
  return this.setValue(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ChartData.prototype.hasValue = function() {
  return jspb.Message.getField(this, 2) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ColorSchema.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ColorSchema.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ColorSchema} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ColorSchema.toObject = function(includeInstance, msg) {
  var f, obj = {
    name: jspb.Message.getFieldWithDefault(msg, 1, ""),
    color: jspb.Message.getFieldWithDefault(msg, 2, ""),
    percent: (f = msg.getPercent()) && proto_base_data_type_pb.Decimal.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ColorSchema}
 */
proto.data.ColorSchema.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ColorSchema;
  return proto.data.ColorSchema.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ColorSchema} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ColorSchema}
 */
proto.data.ColorSchema.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColor(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.Decimal;
      reader.readMessage(value,proto_base_data_type_pb.Decimal.deserializeBinaryFromReader);
      msg.setPercent(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ColorSchema.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ColorSchema.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ColorSchema} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ColorSchema.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getColor();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPercent();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_base_data_type_pb.Decimal.serializeBinaryToWriter
    );
  }
};


/**
 * optional string name = 1;
 * @return {string}
 */
proto.data.ColorSchema.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ColorSchema} returns this
 */
proto.data.ColorSchema.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string color = 2;
 * @return {string}
 */
proto.data.ColorSchema.prototype.getColor = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ColorSchema} returns this
 */
proto.data.ColorSchema.prototype.setColor = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional Decimal percent = 3;
 * @return {?proto.data.Decimal}
 */
proto.data.ColorSchema.prototype.getPercent = function() {
  return /** @type{?proto.data.Decimal} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Decimal, 3));
};


/**
 * @param {?proto.data.Decimal|undefined} value
 * @return {!proto.data.ColorSchema} returns this
*/
proto.data.ColorSchema.prototype.setPercent = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ColorSchema} returns this
 */
proto.data.ColorSchema.prototype.clearPercent = function() {
  return this.setPercent(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ColorSchema.prototype.hasPercent = function() {
  return jspb.Message.getField(this, 3) != null;
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDashboardsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDashboardsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDashboardsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    roleUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    roleId: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDashboardsRequest}
 */
proto.data.ListDashboardsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDashboardsRequest;
  return proto.data.ListDashboardsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDashboardsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDashboardsRequest}
 */
proto.data.ListDashboardsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setRoleUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setRoleId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDashboardsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDashboardsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDashboardsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getRoleUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getRoleId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDashboardsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDashboardsRequest} returns this
*/
proto.data.ListDashboardsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDashboardsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string role_uuid = 2;
 * @return {string}
 */
proto.data.ListDashboardsRequest.prototype.getRoleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setRoleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 role_id = 3;
 * @return {number}
 */
proto.data.ListDashboardsRequest.prototype.getRoleId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setRoleId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListDashboardsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListDashboardsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsRequest} returns this
 */
proto.data.ListDashboardsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDashboardsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDashboardsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDashboardsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDashboardsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    dashboardsList: jspb.Message.toObjectList(msg.getDashboardsList(),
    proto_base_data_type_pb.Dashboard.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDashboardsResponse}
 */
proto.data.ListDashboardsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDashboardsResponse;
  return proto.data.ListDashboardsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDashboardsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDashboardsResponse}
 */
proto.data.ListDashboardsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.Dashboard;
      reader.readMessage(value,proto_base_data_type_pb.Dashboard.deserializeBinaryFromReader);
      msg.addDashboards(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDashboardsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDashboardsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDashboardsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDashboardsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDashboardsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.Dashboard.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListDashboardsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated Dashboard dashboards = 2;
 * @return {!Array<!proto.data.Dashboard>}
 */
proto.data.ListDashboardsResponse.prototype.getDashboardsList = function() {
  return /** @type{!Array<!proto.data.Dashboard>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.Dashboard, 2));
};


/**
 * @param {!Array<!proto.data.Dashboard>} value
 * @return {!proto.data.ListDashboardsResponse} returns this
*/
proto.data.ListDashboardsResponse.prototype.setDashboardsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.Dashboard=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.Dashboard}
 */
proto.data.ListDashboardsResponse.prototype.addDashboards = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.Dashboard, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.clearDashboardsList = function() {
  return this.setDashboardsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDashboardsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDashboardsResponse} returns this
 */
proto.data.ListDashboardsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPrintFormatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPrintFormatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPrintFormatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    reportViewUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    processUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPrintFormatsRequest}
 */
proto.data.ListPrintFormatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPrintFormatsRequest;
  return proto.data.ListPrintFormatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPrintFormatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPrintFormatsRequest}
 */
proto.data.ListPrintFormatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setReportViewUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPrintFormatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPrintFormatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPrintFormatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getReportViewUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getProcessUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListPrintFormatsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
*/
proto.data.ListPrintFormatsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListPrintFormatsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string report_view_uuid = 3;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getReportViewUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setReportViewUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string process_uuid = 4;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getProcessUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setProcessUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListPrintFormatsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListPrintFormatsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsRequest} returns this
 */
proto.data.ListPrintFormatsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListPrintFormatsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListPrintFormatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListPrintFormatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListPrintFormatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    printFormatsList: jspb.Message.toObjectList(msg.getPrintFormatsList(),
    proto_base_data_type_pb.PrintFormat.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListPrintFormatsResponse}
 */
proto.data.ListPrintFormatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListPrintFormatsResponse;
  return proto.data.ListPrintFormatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListPrintFormatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListPrintFormatsResponse}
 */
proto.data.ListPrintFormatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.PrintFormat;
      reader.readMessage(value,proto_base_data_type_pb.PrintFormat.deserializeBinaryFromReader);
      msg.addPrintFormats(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListPrintFormatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListPrintFormatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListPrintFormatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListPrintFormatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getPrintFormatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.PrintFormat.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListPrintFormatsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated PrintFormat print_formats = 2;
 * @return {!Array<!proto.data.PrintFormat>}
 */
proto.data.ListPrintFormatsResponse.prototype.getPrintFormatsList = function() {
  return /** @type{!Array<!proto.data.PrintFormat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.PrintFormat, 2));
};


/**
 * @param {!Array<!proto.data.PrintFormat>} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
*/
proto.data.ListPrintFormatsResponse.prototype.setPrintFormatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.PrintFormat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.PrintFormat}
 */
proto.data.ListPrintFormatsResponse.prototype.addPrintFormats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.PrintFormat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.clearPrintFormatsList = function() {
  return this.setPrintFormatsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListPrintFormatsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListPrintFormatsResponse} returns this
 */
proto.data.ListPrintFormatsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntityLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntityLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntityLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntityLogsRequest}
 */
proto.data.ListEntityLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntityLogsRequest;
  return proto.data.ListEntityLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntityLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntityLogsRequest}
 */
proto.data.ListEntityLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntityLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntityLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntityLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListEntityLogsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListEntityLogsRequest} returns this
*/
proto.data.ListEntityLogsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntityLogsRequest} returns this
 */
proto.data.ListEntityLogsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntityLogsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListEntityLogsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityLogsRequest} returns this
 */
proto.data.ListEntityLogsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListEntityLogsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntityLogsRequest} returns this
 */
proto.data.ListEntityLogsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.ListEntityLogsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityLogsRequest} returns this
 */
proto.data.ListEntityLogsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListEntityLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntityLogsRequest} returns this
 */
proto.data.ListEntityLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListEntityLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityLogsRequest} returns this
 */
proto.data.ListEntityLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListEntityLogsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntityLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntityLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntityLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityLogsList: jspb.Message.toObjectList(msg.getEntityLogsList(),
    proto_base_data_type_pb.EntityLog.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntityLogsResponse}
 */
proto.data.ListEntityLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntityLogsResponse;
  return proto.data.ListEntityLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntityLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntityLogsResponse}
 */
proto.data.ListEntityLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.EntityLog;
      reader.readMessage(value,proto_base_data_type_pb.EntityLog.deserializeBinaryFromReader);
      msg.addEntityLogs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntityLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntityLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntityLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEntityLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.EntityLog.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListEntityLogsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntityLogsResponse} returns this
 */
proto.data.ListEntityLogsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated EntityLog entity_logs = 2;
 * @return {!Array<!proto.data.EntityLog>}
 */
proto.data.ListEntityLogsResponse.prototype.getEntityLogsList = function() {
  return /** @type{!Array<!proto.data.EntityLog>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.EntityLog, 2));
};


/**
 * @param {!Array<!proto.data.EntityLog>} value
 * @return {!proto.data.ListEntityLogsResponse} returns this
*/
proto.data.ListEntityLogsResponse.prototype.setEntityLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.EntityLog=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.EntityLog}
 */
proto.data.ListEntityLogsResponse.prototype.addEntityLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.EntityLog, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListEntityLogsResponse} returns this
 */
proto.data.ListEntityLogsResponse.prototype.clearEntityLogsList = function() {
  return this.setEntityLogsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListEntityLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityLogsResponse} returns this
 */
proto.data.ListEntityLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntityChatsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntityChatsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntityChatsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityChatsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntityChatsRequest}
 */
proto.data.ListEntityChatsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntityChatsRequest;
  return proto.data.ListEntityChatsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntityChatsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntityChatsRequest}
 */
proto.data.ListEntityChatsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntityChatsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntityChatsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntityChatsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityChatsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListEntityChatsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListEntityChatsRequest} returns this
*/
proto.data.ListEntityChatsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListEntityChatsRequest} returns this
 */
proto.data.ListEntityChatsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListEntityChatsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListEntityChatsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityChatsRequest} returns this
 */
proto.data.ListEntityChatsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListEntityChatsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntityChatsRequest} returns this
 */
proto.data.ListEntityChatsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.ListEntityChatsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityChatsRequest} returns this
 */
proto.data.ListEntityChatsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListEntityChatsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntityChatsRequest} returns this
 */
proto.data.ListEntityChatsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListEntityChatsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityChatsRequest} returns this
 */
proto.data.ListEntityChatsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.EntityChat.prototype.toObject = function(opt_includeInstance) {
  return proto.data.EntityChat.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.EntityChat} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.EntityChat.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 4, ""),
    chatTypeUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    description: jspb.Message.getFieldWithDefault(msg, 6, ""),
    confidentialType: jspb.Message.getFieldWithDefault(msg, 7, 0),
    moderationType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    logDate: jspb.Message.getFieldWithDefault(msg, 9, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.EntityChat}
 */
proto.data.EntityChat.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.EntityChat;
  return proto.data.EntityChat.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.EntityChat} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.EntityChat}
 */
proto.data.EntityChat.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatTypeUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 7:
      var value = /** @type {!proto.data.EntityChat.ConfidentialType} */ (reader.readEnum());
      msg.setConfidentialType(value);
      break;
    case 8:
      var value = /** @type {!proto.data.EntityChat.ModerationType} */ (reader.readEnum());
      msg.setModerationType(value);
      break;
    case 9:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.EntityChat.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.EntityChat.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.EntityChat} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.EntityChat.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getChatTypeUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getConfidentialType();
  if (f !== 0.0) {
    writer.writeEnum(
      7,
      f
    );
  }
  f = message.getModerationType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getLogDate();
  if (f !== 0) {
    writer.writeInt64(
      9,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.EntityChat.ConfidentialType = {
  PUBLIC: 0,
  PARTER: 1,
  INTERNAL: 2
};

/**
 * @enum {number}
 */
proto.data.EntityChat.ModerationType = {
  NOT_MODERATED: 0,
  BEFORE_PUBLISHING: 1,
  AFTER_PUBLISHING: 2
};

/**
 * optional string chat_uuid = 1;
 * @return {string}
 */
proto.data.EntityChat.prototype.getChatUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setChatUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.EntityChat.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.EntityChat.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string table_name = 4;
 * @return {string}
 */
proto.data.EntityChat.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string chat_type_uuid = 5;
 * @return {string}
 */
proto.data.EntityChat.prototype.getChatTypeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setChatTypeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string description = 6;
 * @return {string}
 */
proto.data.EntityChat.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional ConfidentialType confidential_type = 7;
 * @return {!proto.data.EntityChat.ConfidentialType}
 */
proto.data.EntityChat.prototype.getConfidentialType = function() {
  return /** @type {!proto.data.EntityChat.ConfidentialType} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {!proto.data.EntityChat.ConfidentialType} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setConfidentialType = function(value) {
  return jspb.Message.setProto3EnumField(this, 7, value);
};


/**
 * optional ModerationType moderation_type = 8;
 * @return {!proto.data.EntityChat.ModerationType}
 */
proto.data.EntityChat.prototype.getModerationType = function() {
  return /** @type {!proto.data.EntityChat.ModerationType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.EntityChat.ModerationType} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setModerationType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional int64 log_date = 9;
 * @return {number}
 */
proto.data.EntityChat.prototype.getLogDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.EntityChat} returns this
 */
proto.data.EntityChat.prototype.setLogDate = function(value) {
  return jspb.Message.setProto3IntField(this, 9, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListEntityChatsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListEntityChatsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListEntityChatsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListEntityChatsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityChatsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    entityChatsList: jspb.Message.toObjectList(msg.getEntityChatsList(),
    proto.data.EntityChat.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListEntityChatsResponse}
 */
proto.data.ListEntityChatsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListEntityChatsResponse;
  return proto.data.ListEntityChatsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListEntityChatsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListEntityChatsResponse}
 */
proto.data.ListEntityChatsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.EntityChat;
      reader.readMessage(value,proto.data.EntityChat.deserializeBinaryFromReader);
      msg.addEntityChats(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListEntityChatsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListEntityChatsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListEntityChatsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListEntityChatsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getEntityChatsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.EntityChat.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListEntityChatsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListEntityChatsResponse} returns this
 */
proto.data.ListEntityChatsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated EntityChat entity_chats = 2;
 * @return {!Array<!proto.data.EntityChat>}
 */
proto.data.ListEntityChatsResponse.prototype.getEntityChatsList = function() {
  return /** @type{!Array<!proto.data.EntityChat>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.EntityChat, 2));
};


/**
 * @param {!Array<!proto.data.EntityChat>} value
 * @return {!proto.data.ListEntityChatsResponse} returns this
*/
proto.data.ListEntityChatsResponse.prototype.setEntityChatsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.EntityChat=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.EntityChat}
 */
proto.data.ListEntityChatsResponse.prototype.addEntityChats = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.EntityChat, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListEntityChatsResponse} returns this
 */
proto.data.ListEntityChatsResponse.prototype.clearEntityChatsList = function() {
  return this.setEntityChatsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListEntityChatsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListEntityChatsResponse} returns this
 */
proto.data.ListEntityChatsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListChatEntriesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListChatEntriesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListChatEntriesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListChatEntriesRequest}
 */
proto.data.ListChatEntriesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListChatEntriesRequest;
  return proto.data.ListChatEntriesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListChatEntriesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListChatEntriesRequest}
 */
proto.data.ListChatEntriesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListChatEntriesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListChatEntriesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListChatEntriesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListChatEntriesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
*/
proto.data.ListChatEntriesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListChatEntriesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.ListChatEntriesRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListChatEntriesRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListChatEntriesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListChatEntriesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListChatEntriesRequest} returns this
 */
proto.data.ListChatEntriesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ChatEntry.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ChatEntry.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ChatEntry} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChatEntry.toObject = function(includeInstance, msg) {
  var f, obj = {
    chatUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    id: jspb.Message.getFieldWithDefault(msg, 2, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    subject: jspb.Message.getFieldWithDefault(msg, 4, ""),
    characterData: jspb.Message.getFieldWithDefault(msg, 5, ""),
    userUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    chatEntryType: jspb.Message.getFieldWithDefault(msg, 8, 0),
    confidentialType: jspb.Message.getFieldWithDefault(msg, 9, 0),
    moderatorStatus: jspb.Message.getFieldWithDefault(msg, 10, 0),
    logDate: jspb.Message.getFieldWithDefault(msg, 11, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ChatEntry}
 */
proto.data.ChatEntry.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ChatEntry;
  return proto.data.ChatEntry.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ChatEntry} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ChatEntry}
 */
proto.data.ChatEntry.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setChatUuid(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setSubject(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setCharacterData(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 8:
      var value = /** @type {!proto.data.ChatEntry.ChatEntryType} */ (reader.readEnum());
      msg.setChatEntryType(value);
      break;
    case 9:
      var value = /** @type {!proto.data.ChatEntry.ConfidentialType} */ (reader.readEnum());
      msg.setConfidentialType(value);
      break;
    case 10:
      var value = /** @type {!proto.data.ChatEntry.ModeratorStatus} */ (reader.readEnum());
      msg.setModeratorStatus(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ChatEntry.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ChatEntry.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ChatEntry} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ChatEntry.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getChatUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getSubject();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getCharacterData();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getChatEntryType();
  if (f !== 0.0) {
    writer.writeEnum(
      8,
      f
    );
  }
  f = message.getConfidentialType();
  if (f !== 0.0) {
    writer.writeEnum(
      9,
      f
    );
  }
  f = message.getModeratorStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      10,
      f
    );
  }
  f = message.getLogDate();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.ChatEntry.ConfidentialType = {
  PUBLIC: 0,
  PARTER: 1,
  INTERNAL: 2
};

/**
 * @enum {number}
 */
proto.data.ChatEntry.ModeratorStatus = {
  NOT_DISPLAYED: 0,
  PUBLISHED: 1,
  SUSPICIUS: 2,
  TO_BE_REVIEWED: 3
};

/**
 * @enum {number}
 */
proto.data.ChatEntry.ChatEntryType = {
  NOTE_FLAT: 0,
  FORUM_THREADED: 1,
  WIKI: 2
};

/**
 * optional string chat_uuid = 1;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getChatUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setChatUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional int32 id = 2;
 * @return {number}
 */
proto.data.ChatEntry.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string uuid = 3;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string subject = 4;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getSubject = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setSubject = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string character_data = 5;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getCharacterData = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setCharacterData = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string user_uuid = 6;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string user_name = 7;
 * @return {string}
 */
proto.data.ChatEntry.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional ChatEntryType chat_entry_type = 8;
 * @return {!proto.data.ChatEntry.ChatEntryType}
 */
proto.data.ChatEntry.prototype.getChatEntryType = function() {
  return /** @type {!proto.data.ChatEntry.ChatEntryType} */ (jspb.Message.getFieldWithDefault(this, 8, 0));
};


/**
 * @param {!proto.data.ChatEntry.ChatEntryType} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setChatEntryType = function(value) {
  return jspb.Message.setProto3EnumField(this, 8, value);
};


/**
 * optional ConfidentialType confidential_type = 9;
 * @return {!proto.data.ChatEntry.ConfidentialType}
 */
proto.data.ChatEntry.prototype.getConfidentialType = function() {
  return /** @type {!proto.data.ChatEntry.ConfidentialType} */ (jspb.Message.getFieldWithDefault(this, 9, 0));
};


/**
 * @param {!proto.data.ChatEntry.ConfidentialType} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setConfidentialType = function(value) {
  return jspb.Message.setProto3EnumField(this, 9, value);
};


/**
 * optional ModeratorStatus moderator_status = 10;
 * @return {!proto.data.ChatEntry.ModeratorStatus}
 */
proto.data.ChatEntry.prototype.getModeratorStatus = function() {
  return /** @type {!proto.data.ChatEntry.ModeratorStatus} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {!proto.data.ChatEntry.ModeratorStatus} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setModeratorStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 10, value);
};


/**
 * optional int64 log_date = 11;
 * @return {number}
 */
proto.data.ChatEntry.prototype.getLogDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ChatEntry} returns this
 */
proto.data.ChatEntry.prototype.setLogDate = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.CreateChatEntryRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.CreateChatEntryRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.CreateChatEntryRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateChatEntryRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    comment: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.CreateChatEntryRequest}
 */
proto.data.CreateChatEntryRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.CreateChatEntryRequest;
  return proto.data.CreateChatEntryRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.CreateChatEntryRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.CreateChatEntryRequest}
 */
proto.data.CreateChatEntryRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setComment(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.CreateChatEntryRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.CreateChatEntryRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.CreateChatEntryRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.CreateChatEntryRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getComment();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.CreateChatEntryRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
*/
proto.data.CreateChatEntryRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.CreateChatEntryRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.CreateChatEntryRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string comment = 5;
 * @return {string}
 */
proto.data.CreateChatEntryRequest.prototype.getComment = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.CreateChatEntryRequest} returns this
 */
proto.data.CreateChatEntryRequest.prototype.setComment = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListChatEntriesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListChatEntriesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListChatEntriesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListChatEntriesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    chatEntriesList: jspb.Message.toObjectList(msg.getChatEntriesList(),
    proto.data.ChatEntry.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListChatEntriesResponse}
 */
proto.data.ListChatEntriesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListChatEntriesResponse;
  return proto.data.ListChatEntriesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListChatEntriesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListChatEntriesResponse}
 */
proto.data.ListChatEntriesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.ChatEntry;
      reader.readMessage(value,proto.data.ChatEntry.deserializeBinaryFromReader);
      msg.addChatEntries(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListChatEntriesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListChatEntriesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListChatEntriesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListChatEntriesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getChatEntriesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.ChatEntry.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListChatEntriesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListChatEntriesResponse} returns this
 */
proto.data.ListChatEntriesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ChatEntry chat_entries = 2;
 * @return {!Array<!proto.data.ChatEntry>}
 */
proto.data.ListChatEntriesResponse.prototype.getChatEntriesList = function() {
  return /** @type{!Array<!proto.data.ChatEntry>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.ChatEntry, 2));
};


/**
 * @param {!Array<!proto.data.ChatEntry>} value
 * @return {!proto.data.ListChatEntriesResponse} returns this
*/
proto.data.ListChatEntriesResponse.prototype.setChatEntriesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ChatEntry=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ChatEntry}
 */
proto.data.ListChatEntriesResponse.prototype.addChatEntries = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ChatEntry, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListChatEntriesResponse} returns this
 */
proto.data.ListChatEntriesResponse.prototype.clearChatEntriesList = function() {
  return this.setChatEntriesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListChatEntriesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListChatEntriesResponse} returns this
 */
proto.data.ListChatEntriesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowsRequest}
 */
proto.data.ListWorkflowsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowsRequest;
  return proto.data.ListWorkflowsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowsRequest}
 */
proto.data.ListWorkflowsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListWorkflowsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
*/
proto.data.ListWorkflowsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListWorkflowsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListWorkflowsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListWorkflowsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListWorkflowsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowsRequest} returns this
 */
proto.data.ListWorkflowsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowActivitiesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowActivitiesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowActivitiesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowActivitiesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    userUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowActivitiesRequest}
 */
proto.data.ListWorkflowActivitiesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowActivitiesRequest;
  return proto.data.ListWorkflowActivitiesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowActivitiesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowActivitiesRequest}
 */
proto.data.ListWorkflowActivitiesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowActivitiesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowActivitiesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowActivitiesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowActivitiesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListWorkflowActivitiesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListWorkflowActivitiesRequest} returns this
*/
proto.data.ListWorkflowActivitiesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListWorkflowActivitiesRequest} returns this
 */
proto.data.ListWorkflowActivitiesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListWorkflowActivitiesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string user_uuid = 2;
 * @return {string}
 */
proto.data.ListWorkflowActivitiesRequest.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowActivitiesRequest} returns this
 */
proto.data.ListWorkflowActivitiesRequest.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListWorkflowActivitiesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowActivitiesRequest} returns this
 */
proto.data.ListWorkflowActivitiesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListWorkflowActivitiesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowActivitiesRequest} returns this
 */
proto.data.ListWorkflowActivitiesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListWorkflowActivitiesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowActivitiesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowActivitiesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowActivitiesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowActivitiesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    activitiesList: jspb.Message.toObjectList(msg.getActivitiesList(),
    proto.data.WorkflowActivity.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowActivitiesResponse}
 */
proto.data.ListWorkflowActivitiesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowActivitiesResponse;
  return proto.data.ListWorkflowActivitiesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowActivitiesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowActivitiesResponse}
 */
proto.data.ListWorkflowActivitiesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.WorkflowActivity;
      reader.readMessage(value,proto.data.WorkflowActivity.deserializeBinaryFromReader);
      msg.addActivities(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowActivitiesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowActivitiesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowActivitiesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowActivitiesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getActivitiesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.WorkflowActivity.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListWorkflowActivitiesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowActivitiesResponse} returns this
 */
proto.data.ListWorkflowActivitiesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated WorkflowActivity activities = 2;
 * @return {!Array<!proto.data.WorkflowActivity>}
 */
proto.data.ListWorkflowActivitiesResponse.prototype.getActivitiesList = function() {
  return /** @type{!Array<!proto.data.WorkflowActivity>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowActivity, 2));
};


/**
 * @param {!Array<!proto.data.WorkflowActivity>} value
 * @return {!proto.data.ListWorkflowActivitiesResponse} returns this
*/
proto.data.ListWorkflowActivitiesResponse.prototype.setActivitiesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.WorkflowActivity=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowActivity}
 */
proto.data.ListWorkflowActivitiesResponse.prototype.addActivities = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.WorkflowActivity, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListWorkflowActivitiesResponse} returns this
 */
proto.data.ListWorkflowActivitiesResponse.prototype.clearActivitiesList = function() {
  return this.setActivitiesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListWorkflowActivitiesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowActivitiesResponse} returns this
 */
proto.data.ListWorkflowActivitiesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowActivity.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowActivity.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowActivity} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowActivity.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    recordUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    userUuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    responsibleUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    responsibleName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    textMessage: jspb.Message.getFieldWithDefault(msg, 9, ""),
    processed: jspb.Message.getBooleanFieldWithDefault(msg, 10, false),
    priority: jspb.Message.getFieldWithDefault(msg, 11, 0),
    created: jspb.Message.getFieldWithDefault(msg, 12, 0),
    lastAlert: jspb.Message.getFieldWithDefault(msg, 13, 0),
    workflowProcess: (f = msg.getWorkflowProcess()) && proto.data.WorkflowProcess.toObject(includeInstance, f),
    workflow: (f = msg.getWorkflow()) && proto.data.WorkflowDefinition.toObject(includeInstance, f),
    node: (f = msg.getNode()) && proto.data.WorkflowNode.toObject(includeInstance, f)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowActivity}
 */
proto.data.WorkflowActivity.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowActivity;
  return proto.data.WorkflowActivity.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowActivity} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowActivity}
 */
proto.data.WorkflowActivity.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setRecordUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextMessage(value);
      break;
    case 10:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProcessed(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 12:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setCreated(value);
      break;
    case 13:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLastAlert(value);
      break;
    case 14:
      var value = new proto.data.WorkflowProcess;
      reader.readMessage(value,proto.data.WorkflowProcess.deserializeBinaryFromReader);
      msg.setWorkflowProcess(value);
      break;
    case 15:
      var value = new proto.data.WorkflowDefinition;
      reader.readMessage(value,proto.data.WorkflowDefinition.deserializeBinaryFromReader);
      msg.setWorkflow(value);
      break;
    case 16:
      var value = new proto.data.WorkflowNode;
      reader.readMessage(value,proto.data.WorkflowNode.deserializeBinaryFromReader);
      msg.setNode(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowActivity.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowActivity.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowActivity} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowActivity.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getRecordUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResponsibleUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getResponsibleName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getTextMessage();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getProcessed();
  if (f) {
    writer.writeBool(
      10,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      11,
      f
    );
  }
  f = message.getCreated();
  if (f !== 0) {
    writer.writeInt64(
      12,
      f
    );
  }
  f = message.getLastAlert();
  if (f !== 0) {
    writer.writeInt64(
      13,
      f
    );
  }
  f = message.getWorkflowProcess();
  if (f != null) {
    writer.writeMessage(
      14,
      f,
      proto.data.WorkflowProcess.serializeBinaryToWriter
    );
  }
  f = message.getWorkflow();
  if (f != null) {
    writer.writeMessage(
      15,
      f,
      proto.data.WorkflowDefinition.serializeBinaryToWriter
    );
  }
  f = message.getNode();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.data.WorkflowNode.serializeBinaryToWriter
    );
  }
};


/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.WorkflowActivity.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string table_name = 3;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string record_uuid = 4;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getRecordUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setRecordUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string user_uuid = 5;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string user_name = 6;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string responsible_uuid = 7;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getResponsibleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setResponsibleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string responsible_name = 8;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getResponsibleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setResponsibleName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string text_message = 9;
 * @return {string}
 */
proto.data.WorkflowActivity.prototype.getTextMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setTextMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional bool processed = 10;
 * @return {boolean}
 */
proto.data.WorkflowActivity.prototype.getProcessed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 10, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setProcessed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 10, value);
};


/**
 * optional int32 priority = 11;
 * @return {number}
 */
proto.data.WorkflowActivity.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional int64 created = 12;
 * @return {number}
 */
proto.data.WorkflowActivity.prototype.getCreated = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 12, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setCreated = function(value) {
  return jspb.Message.setProto3IntField(this, 12, value);
};


/**
 * optional int64 last_alert = 13;
 * @return {number}
 */
proto.data.WorkflowActivity.prototype.getLastAlert = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.setLastAlert = function(value) {
  return jspb.Message.setProto3IntField(this, 13, value);
};


/**
 * optional WorkflowProcess workflow_process = 14;
 * @return {?proto.data.WorkflowProcess}
 */
proto.data.WorkflowActivity.prototype.getWorkflowProcess = function() {
  return /** @type{?proto.data.WorkflowProcess} */ (
    jspb.Message.getWrapperField(this, proto.data.WorkflowProcess, 14));
};


/**
 * @param {?proto.data.WorkflowProcess|undefined} value
 * @return {!proto.data.WorkflowActivity} returns this
*/
proto.data.WorkflowActivity.prototype.setWorkflowProcess = function(value) {
  return jspb.Message.setWrapperField(this, 14, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.clearWorkflowProcess = function() {
  return this.setWorkflowProcess(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.WorkflowActivity.prototype.hasWorkflowProcess = function() {
  return jspb.Message.getField(this, 14) != null;
};


/**
 * optional WorkflowDefinition workflow = 15;
 * @return {?proto.data.WorkflowDefinition}
 */
proto.data.WorkflowActivity.prototype.getWorkflow = function() {
  return /** @type{?proto.data.WorkflowDefinition} */ (
    jspb.Message.getWrapperField(this, proto.data.WorkflowDefinition, 15));
};


/**
 * @param {?proto.data.WorkflowDefinition|undefined} value
 * @return {!proto.data.WorkflowActivity} returns this
*/
proto.data.WorkflowActivity.prototype.setWorkflow = function(value) {
  return jspb.Message.setWrapperField(this, 15, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.clearWorkflow = function() {
  return this.setWorkflow(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.WorkflowActivity.prototype.hasWorkflow = function() {
  return jspb.Message.getField(this, 15) != null;
};


/**
 * optional WorkflowNode node = 16;
 * @return {?proto.data.WorkflowNode}
 */
proto.data.WorkflowActivity.prototype.getNode = function() {
  return /** @type{?proto.data.WorkflowNode} */ (
    jspb.Message.getWrapperField(this, proto.data.WorkflowNode, 16));
};


/**
 * @param {?proto.data.WorkflowNode|undefined} value
 * @return {!proto.data.WorkflowActivity} returns this
*/
proto.data.WorkflowActivity.prototype.setNode = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.WorkflowActivity} returns this
 */
proto.data.WorkflowActivity.prototype.clearNode = function() {
  return this.setNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.WorkflowActivity.prototype.hasNode = function() {
  return jspb.Message.getField(this, 16) != null;
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowDefinition.repeatedFields_ = [17];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowDefinition.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowDefinition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowDefinition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowDefinition.toObject = function(includeInstance, msg) {
  var f, obj = {
    id: jspb.Message.getFieldWithDefault(msg, 1, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    name: jspb.Message.getFieldWithDefault(msg, 4, ""),
    description: jspb.Message.getFieldWithDefault(msg, 5, ""),
    help: jspb.Message.getFieldWithDefault(msg, 6, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    responsibleUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    responsibleName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 10, 0),
    validFrom: jspb.Message.getFieldWithDefault(msg, 11, 0),
    isDefault: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    isValid: jspb.Message.getBooleanFieldWithDefault(msg, 13, false),
    publishStatus: jspb.Message.getFieldWithDefault(msg, 14, 0),
    durationUnit: jspb.Message.getFieldWithDefault(msg, 15, 0),
    startNode: (f = msg.getStartNode()) && proto.data.WorkflowNode.toObject(includeInstance, f),
    workflowNodesList: jspb.Message.toObjectList(msg.getWorkflowNodesList(),
    proto.data.WorkflowNode.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowDefinition}
 */
proto.data.WorkflowDefinition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowDefinition;
  return proto.data.WorkflowDefinition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowDefinition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowDefinition}
 */
proto.data.WorkflowDefinition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelp(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleName(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setValidFrom(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsDefault(value);
      break;
    case 13:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsValid(value);
      break;
    case 14:
      var value = /** @type {!proto.data.WorkflowDefinition.PublishStatus} */ (reader.readEnum());
      msg.setPublishStatus(value);
      break;
    case 15:
      var value = /** @type {!proto.data.WorkflowDefinition.DurationUnit} */ (reader.readEnum());
      msg.setDurationUnit(value);
      break;
    case 16:
      var value = new proto.data.WorkflowNode;
      reader.readMessage(value,proto.data.WorkflowNode.deserializeBinaryFromReader);
      msg.setStartNode(value);
      break;
    case 17:
      var value = new proto.data.WorkflowNode;
      reader.readMessage(value,proto.data.WorkflowNode.deserializeBinaryFromReader);
      msg.addWorkflowNodes(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowDefinition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowDefinition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowDefinition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowDefinition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getHelp();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getResponsibleUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getResponsibleName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getValidFrom();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getIsDefault();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getIsValid();
  if (f) {
    writer.writeBool(
      13,
      f
    );
  }
  f = message.getPublishStatus();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getDurationUnit();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getStartNode();
  if (f != null) {
    writer.writeMessage(
      16,
      f,
      proto.data.WorkflowNode.serializeBinaryToWriter
    );
  }
  f = message.getWorkflowNodesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      17,
      f,
      proto.data.WorkflowNode.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowDefinition.DurationUnit = {
  DAY: 0,
  HOUR: 1,
  MINUTE: 2,
  MONTH: 3,
  SECOND: 4,
  YEAR: 5
};

/**
 * @enum {number}
 */
proto.data.WorkflowDefinition.PublishStatus = {
  RELEASED: 0,
  TEST: 1,
  UNDER_REVISION: 2,
  VOID: 3
};

/**
 * optional int32 id = 1;
 * @return {number}
 */
proto.data.WorkflowDefinition.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string uuid = 2;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string name = 4;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string description = 5;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string help = 6;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string table_name = 7;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string responsible_uuid = 8;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getResponsibleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setResponsibleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string responsible_name = 9;
 * @return {string}
 */
proto.data.WorkflowDefinition.prototype.getResponsibleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setResponsibleName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 priority = 10;
 * @return {number}
 */
proto.data.WorkflowDefinition.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional int64 valid_from = 11;
 * @return {number}
 */
proto.data.WorkflowDefinition.prototype.getValidFrom = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setValidFrom = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional bool is_default = 12;
 * @return {boolean}
 */
proto.data.WorkflowDefinition.prototype.getIsDefault = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setIsDefault = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional bool is_valid = 13;
 * @return {boolean}
 */
proto.data.WorkflowDefinition.prototype.getIsValid = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 13, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setIsValid = function(value) {
  return jspb.Message.setProto3BooleanField(this, 13, value);
};


/**
 * optional PublishStatus publish_status = 14;
 * @return {!proto.data.WorkflowDefinition.PublishStatus}
 */
proto.data.WorkflowDefinition.prototype.getPublishStatus = function() {
  return /** @type {!proto.data.WorkflowDefinition.PublishStatus} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.data.WorkflowDefinition.PublishStatus} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setPublishStatus = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * optional DurationUnit duration_unit = 15;
 * @return {!proto.data.WorkflowDefinition.DurationUnit}
 */
proto.data.WorkflowDefinition.prototype.getDurationUnit = function() {
  return /** @type {!proto.data.WorkflowDefinition.DurationUnit} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.data.WorkflowDefinition.DurationUnit} value
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.setDurationUnit = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional WorkflowNode start_node = 16;
 * @return {?proto.data.WorkflowNode}
 */
proto.data.WorkflowDefinition.prototype.getStartNode = function() {
  return /** @type{?proto.data.WorkflowNode} */ (
    jspb.Message.getWrapperField(this, proto.data.WorkflowNode, 16));
};


/**
 * @param {?proto.data.WorkflowNode|undefined} value
 * @return {!proto.data.WorkflowDefinition} returns this
*/
proto.data.WorkflowDefinition.prototype.setStartNode = function(value) {
  return jspb.Message.setWrapperField(this, 16, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.clearStartNode = function() {
  return this.setStartNode(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.WorkflowDefinition.prototype.hasStartNode = function() {
  return jspb.Message.getField(this, 16) != null;
};


/**
 * repeated WorkflowNode workflow_nodes = 17;
 * @return {!Array<!proto.data.WorkflowNode>}
 */
proto.data.WorkflowDefinition.prototype.getWorkflowNodesList = function() {
  return /** @type{!Array<!proto.data.WorkflowNode>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowNode, 17));
};


/**
 * @param {!Array<!proto.data.WorkflowNode>} value
 * @return {!proto.data.WorkflowDefinition} returns this
*/
proto.data.WorkflowDefinition.prototype.setWorkflowNodesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 17, value);
};


/**
 * @param {!proto.data.WorkflowNode=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowNode}
 */
proto.data.WorkflowDefinition.prototype.addWorkflowNodes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 17, opt_value, proto.data.WorkflowNode, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowDefinition} returns this
 */
proto.data.WorkflowDefinition.prototype.clearWorkflowNodesList = function() {
  return this.setWorkflowNodesList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowNode.repeatedFields_ = [12];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowNode.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowNode.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowNode} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowNode.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    value: jspb.Message.getFieldWithDefault(msg, 2, ""),
    name: jspb.Message.getFieldWithDefault(msg, 3, ""),
    description: jspb.Message.getFieldWithDefault(msg, 4, ""),
    help: jspb.Message.getFieldWithDefault(msg, 5, ""),
    responsibleUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    responsibleName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    documentActionValue: jspb.Message.getFieldWithDefault(msg, 8, ""),
    documentActionName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    priority: jspb.Message.getFieldWithDefault(msg, 10, 0),
    action: jspb.Message.getFieldWithDefault(msg, 11, 0),
    transitionsList: jspb.Message.toObjectList(msg.getTransitionsList(),
    proto.data.WorkflowTransition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowNode}
 */
proto.data.WorkflowNode.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowNode;
  return proto.data.WorkflowNode.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowNode} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowNode}
 */
proto.data.WorkflowNode.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setName(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setHelp(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentActionValue(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentActionName(value);
      break;
    case 10:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPriority(value);
      break;
    case 11:
      var value = /** @type {!proto.data.WorkflowNode.Action} */ (reader.readEnum());
      msg.setAction(value);
      break;
    case 12:
      var value = new proto.data.WorkflowTransition;
      reader.readMessage(value,proto.data.WorkflowTransition.deserializeBinaryFromReader);
      msg.addTransitions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowNode.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowNode.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowNode} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowNode.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getHelp();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getResponsibleUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getResponsibleName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getDocumentActionValue();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getDocumentActionName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0) {
    writer.writeInt32(
      10,
      f
    );
  }
  f = message.getAction();
  if (f !== 0.0) {
    writer.writeEnum(
      11,
      f
    );
  }
  f = message.getTransitionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      12,
      f,
      proto.data.WorkflowTransition.serializeBinaryToWriter
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowNode.Action = {
  USER_CHOICE: 0,
  DOCUMENT_ACTION: 1,
  SUB_WORKFLOW: 2,
  EMAIL: 3,
  APPS_PROCESS: 4,
  SMART_VIEW: 5,
  APPS_REPORT: 6,
  SMART_BROWSE: 7,
  APPS_TASK: 8,
  SET_VARIABLE: 9,
  USER_WINDOW: 10,
  USER_FORM: 11,
  WAIT_SLEEP: 12
};

/**
 * optional string node_uuid = 1;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getNodeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setNodeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string value = 2;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string name = 3;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional string description = 4;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string help = 5;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getHelp = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setHelp = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string responsible_uuid = 6;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getResponsibleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setResponsibleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string responsible_name = 7;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getResponsibleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setResponsibleName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string document_action_value = 8;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getDocumentActionValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setDocumentActionValue = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string document_action_name = 9;
 * @return {string}
 */
proto.data.WorkflowNode.prototype.getDocumentActionName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setDocumentActionName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional int32 priority = 10;
 * @return {number}
 */
proto.data.WorkflowNode.prototype.getPriority = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 10, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setPriority = function(value) {
  return jspb.Message.setProto3IntField(this, 10, value);
};


/**
 * optional Action action = 11;
 * @return {!proto.data.WorkflowNode.Action}
 */
proto.data.WorkflowNode.prototype.getAction = function() {
  return /** @type {!proto.data.WorkflowNode.Action} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {!proto.data.WorkflowNode.Action} value
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.setAction = function(value) {
  return jspb.Message.setProto3EnumField(this, 11, value);
};


/**
 * repeated WorkflowTransition transitions = 12;
 * @return {!Array<!proto.data.WorkflowTransition>}
 */
proto.data.WorkflowNode.prototype.getTransitionsList = function() {
  return /** @type{!Array<!proto.data.WorkflowTransition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowTransition, 12));
};


/**
 * @param {!Array<!proto.data.WorkflowTransition>} value
 * @return {!proto.data.WorkflowNode} returns this
*/
proto.data.WorkflowNode.prototype.setTransitionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 12, value);
};


/**
 * @param {!proto.data.WorkflowTransition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowTransition}
 */
proto.data.WorkflowNode.prototype.addTransitions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 12, opt_value, proto.data.WorkflowTransition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowNode} returns this
 */
proto.data.WorkflowNode.prototype.clearTransitionsList = function() {
  return this.setTransitionsList([]);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowCondition.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowCondition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowCondition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowCondition.toObject = function(includeInstance, msg) {
  var f, obj = {
    sequence: jspb.Message.getFieldWithDefault(msg, 1, 0),
    columnName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    value: jspb.Message.getFieldWithDefault(msg, 3, ""),
    conditionType: jspb.Message.getFieldWithDefault(msg, 4, 0),
    operation: jspb.Message.getFieldWithDefault(msg, 5, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowCondition}
 */
proto.data.WorkflowCondition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowCondition;
  return proto.data.WorkflowCondition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowCondition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowCondition}
 */
proto.data.WorkflowCondition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setValue(value);
      break;
    case 4:
      var value = /** @type {!proto.data.WorkflowCondition.ConditionType} */ (reader.readEnum());
      msg.setConditionType(value);
      break;
    case 5:
      var value = /** @type {!proto.data.WorkflowCondition.Operation} */ (reader.readEnum());
      msg.setOperation(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowCondition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowCondition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowCondition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowCondition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      1,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getValue();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getConditionType();
  if (f !== 0.0) {
    writer.writeEnum(
      4,
      f
    );
  }
  f = message.getOperation();
  if (f !== 0.0) {
    writer.writeEnum(
      5,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowCondition.ConditionType = {
  AND: 0,
  OR: 1
};

/**
 * @enum {number}
 */
proto.data.WorkflowCondition.Operation = {
  EQUAL: 0,
  NOT_EQUAL: 1,
  LIKE: 2,
  GREATER: 4,
  GREATER_EQUAL: 5,
  LESS: 6,
  LESS_EQUAL: 7,
  BETWEEN: 8,
  SQL: 9
};

/**
 * optional int32 sequence = 1;
 * @return {number}
 */
proto.data.WorkflowCondition.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * optional string column_name = 2;
 * @return {string}
 */
proto.data.WorkflowCondition.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string value = 3;
 * @return {string}
 */
proto.data.WorkflowCondition.prototype.getValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setValue = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional ConditionType condition_type = 4;
 * @return {!proto.data.WorkflowCondition.ConditionType}
 */
proto.data.WorkflowCondition.prototype.getConditionType = function() {
  return /** @type {!proto.data.WorkflowCondition.ConditionType} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {!proto.data.WorkflowCondition.ConditionType} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setConditionType = function(value) {
  return jspb.Message.setProto3EnumField(this, 4, value);
};


/**
 * optional Operation operation = 5;
 * @return {!proto.data.WorkflowCondition.Operation}
 */
proto.data.WorkflowCondition.prototype.getOperation = function() {
  return /** @type {!proto.data.WorkflowCondition.Operation} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {!proto.data.WorkflowCondition.Operation} value
 * @return {!proto.data.WorkflowCondition} returns this
 */
proto.data.WorkflowCondition.prototype.setOperation = function(value) {
  return jspb.Message.setProto3EnumField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowTransition.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowTransition.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowTransition.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowTransition} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowTransition.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeNextUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    description: jspb.Message.getFieldWithDefault(msg, 2, ""),
    isStdUserWorkflow: jspb.Message.getBooleanFieldWithDefault(msg, 3, false),
    sequence: jspb.Message.getFieldWithDefault(msg, 4, 0),
    workflowConditionsList: jspb.Message.toObjectList(msg.getWorkflowConditionsList(),
    proto.data.WorkflowCondition.toObject, includeInstance)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowTransition}
 */
proto.data.WorkflowTransition.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowTransition;
  return proto.data.WorkflowTransition.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowTransition} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowTransition}
 */
proto.data.WorkflowTransition.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeNextUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setDescription(value);
      break;
    case 3:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setIsStdUserWorkflow(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setSequence(value);
      break;
    case 5:
      var value = new proto.data.WorkflowCondition;
      reader.readMessage(value,proto.data.WorkflowCondition.deserializeBinaryFromReader);
      msg.addWorkflowConditions(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowTransition.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowTransition.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowTransition} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowTransition.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeNextUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getDescription();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getIsStdUserWorkflow();
  if (f) {
    writer.writeBool(
      3,
      f
    );
  }
  f = message.getSequence();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getWorkflowConditionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto.data.WorkflowCondition.serializeBinaryToWriter
    );
  }
};


/**
 * optional string node_next_uuid = 1;
 * @return {string}
 */
proto.data.WorkflowTransition.prototype.getNodeNextUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setNodeNextUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string description = 2;
 * @return {string}
 */
proto.data.WorkflowTransition.prototype.getDescription = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setDescription = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional bool is_std_user_workflow = 3;
 * @return {boolean}
 */
proto.data.WorkflowTransition.prototype.getIsStdUserWorkflow = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 3, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setIsStdUserWorkflow = function(value) {
  return jspb.Message.setProto3BooleanField(this, 3, value);
};


/**
 * optional int32 sequence = 4;
 * @return {number}
 */
proto.data.WorkflowTransition.prototype.getSequence = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.setSequence = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * repeated WorkflowCondition workflow_conditions = 5;
 * @return {!Array<!proto.data.WorkflowCondition>}
 */
proto.data.WorkflowTransition.prototype.getWorkflowConditionsList = function() {
  return /** @type{!Array<!proto.data.WorkflowCondition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowCondition, 5));
};


/**
 * @param {!Array<!proto.data.WorkflowCondition>} value
 * @return {!proto.data.WorkflowTransition} returns this
*/
proto.data.WorkflowTransition.prototype.setWorkflowConditionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.WorkflowCondition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowCondition}
 */
proto.data.WorkflowTransition.prototype.addWorkflowConditions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.WorkflowCondition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowTransition} returns this
 */
proto.data.WorkflowTransition.prototype.clearWorkflowConditionsList = function() {
  return this.setWorkflowConditionsList([]);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListWorkflowsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workflowsList: jspb.Message.toObjectList(msg.getWorkflowsList(),
    proto.data.WorkflowDefinition.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowsResponse}
 */
proto.data.ListWorkflowsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowsResponse;
  return proto.data.ListWorkflowsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowsResponse}
 */
proto.data.ListWorkflowsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.WorkflowDefinition;
      reader.readMessage(value,proto.data.WorkflowDefinition.deserializeBinaryFromReader);
      msg.addWorkflows(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWorkflowsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.WorkflowDefinition.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListWorkflowsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowsResponse} returns this
 */
proto.data.ListWorkflowsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated WorkflowDefinition workflows = 2;
 * @return {!Array<!proto.data.WorkflowDefinition>}
 */
proto.data.ListWorkflowsResponse.prototype.getWorkflowsList = function() {
  return /** @type{!Array<!proto.data.WorkflowDefinition>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowDefinition, 2));
};


/**
 * @param {!Array<!proto.data.WorkflowDefinition>} value
 * @return {!proto.data.ListWorkflowsResponse} returns this
*/
proto.data.ListWorkflowsResponse.prototype.setWorkflowsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.WorkflowDefinition=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowDefinition}
 */
proto.data.ListWorkflowsResponse.prototype.addWorkflows = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.WorkflowDefinition, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListWorkflowsResponse} returns this
 */
proto.data.ListWorkflowsResponse.prototype.clearWorkflowsList = function() {
  return this.setWorkflowsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListWorkflowsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowsResponse} returns this
 */
proto.data.ListWorkflowsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentActionsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentActionsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentActionsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    documentStatus: jspb.Message.getFieldWithDefault(msg, 5, ""),
    documentAction: jspb.Message.getFieldWithDefault(msg, 6, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 7, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 8, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentActionsRequest}
 */
proto.data.ListDocumentActionsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentActionsRequest;
  return proto.data.ListDocumentActionsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentActionsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentActionsRequest}
 */
proto.data.ListDocumentActionsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentStatus(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentAction(value);
      break;
    case 7:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentActionsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentActionsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentActionsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDocumentStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getDocumentAction();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      7,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDocumentActionsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
*/
proto.data.ListDocumentActionsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDocumentActionsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListDocumentActionsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string document_status = 5;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getDocumentStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setDocumentStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string document_action = 6;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getDocumentAction = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setDocumentAction = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional int32 page_size = 7;
 * @return {number}
 */
proto.data.ListDocumentActionsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 7, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 7, value);
};


/**
 * optional string page_token = 8;
 * @return {string}
 */
proto.data.ListDocumentActionsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsRequest} returns this
 */
proto.data.ListDocumentActionsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDocumentActionsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentActionsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentActionsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentActionsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    documentActionsList: jspb.Message.toObjectList(msg.getDocumentActionsList(),
    proto_base_data_type_pb.DocumentAction.toObject, includeInstance),
    defaultDocumentAction: (f = msg.getDefaultDocumentAction()) && proto_base_data_type_pb.DocumentAction.toObject(includeInstance, f),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentActionsResponse}
 */
proto.data.ListDocumentActionsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentActionsResponse;
  return proto.data.ListDocumentActionsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentActionsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentActionsResponse}
 */
proto.data.ListDocumentActionsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.DocumentAction;
      reader.readMessage(value,proto_base_data_type_pb.DocumentAction.deserializeBinaryFromReader);
      msg.addDocumentActions(value);
      break;
    case 3:
      var value = new proto_base_data_type_pb.DocumentAction;
      reader.readMessage(value,proto_base_data_type_pb.DocumentAction.deserializeBinaryFromReader);
      msg.setDefaultDocumentAction(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentActionsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentActionsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentActionsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentActionsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDocumentActionsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.DocumentAction.serializeBinaryToWriter
    );
  }
  f = message.getDefaultDocumentAction();
  if (f != null) {
    writer.writeMessage(
      3,
      f,
      proto_base_data_type_pb.DocumentAction.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListDocumentActionsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DocumentAction document_actions = 2;
 * @return {!Array<!proto.data.DocumentAction>}
 */
proto.data.ListDocumentActionsResponse.prototype.getDocumentActionsList = function() {
  return /** @type{!Array<!proto.data.DocumentAction>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.DocumentAction, 2));
};


/**
 * @param {!Array<!proto.data.DocumentAction>} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
*/
proto.data.ListDocumentActionsResponse.prototype.setDocumentActionsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.DocumentAction=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.DocumentAction}
 */
proto.data.ListDocumentActionsResponse.prototype.addDocumentActions = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.DocumentAction, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.clearDocumentActionsList = function() {
  return this.setDocumentActionsList([]);
};


/**
 * optional DocumentAction default_document_action = 3;
 * @return {?proto.data.DocumentAction}
 */
proto.data.ListDocumentActionsResponse.prototype.getDefaultDocumentAction = function() {
  return /** @type{?proto.data.DocumentAction} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.DocumentAction, 3));
};


/**
 * @param {?proto.data.DocumentAction|undefined} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
*/
proto.data.ListDocumentActionsResponse.prototype.setDefaultDocumentAction = function(value) {
  return jspb.Message.setWrapperField(this, 3, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.clearDefaultDocumentAction = function() {
  return this.setDefaultDocumentAction(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDocumentActionsResponse.prototype.hasDefaultDocumentAction = function() {
  return jspb.Message.getField(this, 3) != null;
};


/**
 * optional string next_page_token = 4;
 * @return {string}
 */
proto.data.ListDocumentActionsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentActionsResponse} returns this
 */
proto.data.ListDocumentActionsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentStatusesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentStatusesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentStatusesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    documentStatus: jspb.Message.getFieldWithDefault(msg, 5, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentStatusesRequest}
 */
proto.data.ListDocumentStatusesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentStatusesRequest;
  return proto.data.ListDocumentStatusesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentStatusesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentStatusesRequest}
 */
proto.data.ListDocumentStatusesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setDocumentStatus(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentStatusesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentStatusesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentStatusesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getDocumentStatus();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDocumentStatusesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
*/
proto.data.ListDocumentStatusesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDocumentStatusesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListDocumentStatusesRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string document_status = 5;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getDocumentStatus = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setDocumentStatus = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListDocumentStatusesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListDocumentStatusesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesRequest} returns this
 */
proto.data.ListDocumentStatusesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDocumentStatusesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDocumentStatusesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDocumentStatusesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDocumentStatusesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    documentStatusesList: jspb.Message.toObjectList(msg.getDocumentStatusesList(),
    proto_base_data_type_pb.DocumentStatus.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDocumentStatusesResponse}
 */
proto.data.ListDocumentStatusesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDocumentStatusesResponse;
  return proto.data.ListDocumentStatusesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDocumentStatusesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDocumentStatusesResponse}
 */
proto.data.ListDocumentStatusesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.DocumentStatus;
      reader.readMessage(value,proto_base_data_type_pb.DocumentStatus.deserializeBinaryFromReader);
      msg.addDocumentStatuses(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDocumentStatusesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDocumentStatusesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDocumentStatusesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDocumentStatusesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDocumentStatusesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.DocumentStatus.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListDocumentStatusesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
 */
proto.data.ListDocumentStatusesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DocumentStatus document_statuses = 2;
 * @return {!Array<!proto.data.DocumentStatus>}
 */
proto.data.ListDocumentStatusesResponse.prototype.getDocumentStatusesList = function() {
  return /** @type{!Array<!proto.data.DocumentStatus>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.DocumentStatus, 2));
};


/**
 * @param {!Array<!proto.data.DocumentStatus>} value
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
*/
proto.data.ListDocumentStatusesResponse.prototype.setDocumentStatusesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.DocumentStatus=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.DocumentStatus}
 */
proto.data.ListDocumentStatusesResponse.prototype.addDocumentStatuses = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.DocumentStatus, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
 */
proto.data.ListDocumentStatusesResponse.prototype.clearDocumentStatusesList = function() {
  return this.setDocumentStatusesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDocumentStatusesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDocumentStatusesResponse} returns this
 */
proto.data.ListDocumentStatusesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowLogsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowLogsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowLogsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 5, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 6, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowLogsRequest}
 */
proto.data.ListWorkflowLogsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowLogsRequest;
  return proto.data.ListWorkflowLogsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowLogsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowLogsRequest}
 */
proto.data.ListWorkflowLogsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowLogsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowLogsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowLogsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      5,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListWorkflowLogsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
*/
proto.data.ListWorkflowLogsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListWorkflowLogsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListWorkflowLogsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListWorkflowLogsRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.ListWorkflowLogsRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional int32 page_size = 5;
 * @return {number}
 */
proto.data.ListWorkflowLogsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 5, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 5, value);
};


/**
 * optional string page_token = 6;
 * @return {string}
 */
proto.data.ListWorkflowLogsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowLogsRequest} returns this
 */
proto.data.ListWorkflowLogsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.WorkflowProcess.repeatedFields_ = [15];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowProcess.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowProcess.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowProcess} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowProcess.toObject = function(includeInstance, msg) {
  var f, obj = {
    processUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    workflowUuid: jspb.Message.getFieldWithDefault(msg, 2, ""),
    workflowName: jspb.Message.getFieldWithDefault(msg, 3, ""),
    id: jspb.Message.getFieldWithDefault(msg, 4, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 5, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 8, ""),
    responsibleUuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    responsibleName: jspb.Message.getFieldWithDefault(msg, 10, ""),
    textMessage: jspb.Message.getFieldWithDefault(msg, 11, ""),
    processed: jspb.Message.getBooleanFieldWithDefault(msg, 12, false),
    workflowState: jspb.Message.getFieldWithDefault(msg, 13, 0),
    priority: jspb.Message.getFieldWithDefault(msg, 14, 0),
    workflowEventsList: jspb.Message.toObjectList(msg.getWorkflowEventsList(),
    proto.data.WorkflowEvent.toObject, includeInstance),
    logDate: jspb.Message.getFieldWithDefault(msg, 16, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowProcess}
 */
proto.data.WorkflowProcess.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowProcess;
  return proto.data.WorkflowProcess.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowProcess} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowProcess}
 */
proto.data.WorkflowProcess.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowUuid(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setWorkflowName(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleUuid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleName(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextMessage(value);
      break;
    case 12:
      var value = /** @type {boolean} */ (reader.readBool());
      msg.setProcessed(value);
      break;
    case 13:
      var value = /** @type {!proto.data.WorkflowProcess.WorkflowState} */ (reader.readEnum());
      msg.setWorkflowState(value);
      break;
    case 14:
      var value = /** @type {!proto.data.WorkflowProcess.Priority} */ (reader.readEnum());
      msg.setPriority(value);
      break;
    case 15:
      var value = new proto.data.WorkflowEvent;
      reader.readMessage(value,proto.data.WorkflowEvent.deserializeBinaryFromReader);
      msg.addWorkflowEvents(value);
      break;
    case 16:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowProcess.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowProcess.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowProcess} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowProcess.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getProcessUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getWorkflowUuid();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getWorkflowName();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getResponsibleUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getResponsibleName();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTextMessage();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getProcessed();
  if (f) {
    writer.writeBool(
      12,
      f
    );
  }
  f = message.getWorkflowState();
  if (f !== 0.0) {
    writer.writeEnum(
      13,
      f
    );
  }
  f = message.getPriority();
  if (f !== 0.0) {
    writer.writeEnum(
      14,
      f
    );
  }
  f = message.getWorkflowEventsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      15,
      f,
      proto.data.WorkflowEvent.serializeBinaryToWriter
    );
  }
  f = message.getLogDate();
  if (f !== 0) {
    writer.writeInt64(
      16,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowProcess.WorkflowState = {
  RUNNING: 0,
  COMPLETED: 1,
  ABORTED: 2,
  TERMINATED: 3,
  SUSPENDED: 4,
  NOT_STARTED: 5
};

/**
 * @enum {number}
 */
proto.data.WorkflowProcess.Priority = {
  URGENT: 0,
  HIGH: 1,
  MEDIUM: 2,
  LOW: 3,
  MINOR: 4
};

/**
 * optional string process_uuid = 1;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getProcessUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setProcessUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string workflow_uuid = 2;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getWorkflowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setWorkflowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string workflow_name = 3;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getWorkflowName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setWorkflowName = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 id = 4;
 * @return {number}
 */
proto.data.WorkflowProcess.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string uuid = 5;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string table_name = 6;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string user_uuid = 7;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string user_name = 8;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string responsible_uuid = 9;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getResponsibleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setResponsibleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string responsible_name = 10;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getResponsibleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setResponsibleName = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string text_message = 11;
 * @return {string}
 */
proto.data.WorkflowProcess.prototype.getTextMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setTextMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional bool processed = 12;
 * @return {boolean}
 */
proto.data.WorkflowProcess.prototype.getProcessed = function() {
  return /** @type {boolean} */ (jspb.Message.getBooleanFieldWithDefault(this, 12, false));
};


/**
 * @param {boolean} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setProcessed = function(value) {
  return jspb.Message.setProto3BooleanField(this, 12, value);
};


/**
 * optional WorkflowState workflow_state = 13;
 * @return {!proto.data.WorkflowProcess.WorkflowState}
 */
proto.data.WorkflowProcess.prototype.getWorkflowState = function() {
  return /** @type {!proto.data.WorkflowProcess.WorkflowState} */ (jspb.Message.getFieldWithDefault(this, 13, 0));
};


/**
 * @param {!proto.data.WorkflowProcess.WorkflowState} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setWorkflowState = function(value) {
  return jspb.Message.setProto3EnumField(this, 13, value);
};


/**
 * optional Priority priority = 14;
 * @return {!proto.data.WorkflowProcess.Priority}
 */
proto.data.WorkflowProcess.prototype.getPriority = function() {
  return /** @type {!proto.data.WorkflowProcess.Priority} */ (jspb.Message.getFieldWithDefault(this, 14, 0));
};


/**
 * @param {!proto.data.WorkflowProcess.Priority} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setPriority = function(value) {
  return jspb.Message.setProto3EnumField(this, 14, value);
};


/**
 * repeated WorkflowEvent workflow_events = 15;
 * @return {!Array<!proto.data.WorkflowEvent>}
 */
proto.data.WorkflowProcess.prototype.getWorkflowEventsList = function() {
  return /** @type{!Array<!proto.data.WorkflowEvent>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowEvent, 15));
};


/**
 * @param {!Array<!proto.data.WorkflowEvent>} value
 * @return {!proto.data.WorkflowProcess} returns this
*/
proto.data.WorkflowProcess.prototype.setWorkflowEventsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 15, value);
};


/**
 * @param {!proto.data.WorkflowEvent=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowEvent}
 */
proto.data.WorkflowProcess.prototype.addWorkflowEvents = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 15, opt_value, proto.data.WorkflowEvent, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.clearWorkflowEventsList = function() {
  return this.setWorkflowEventsList([]);
};


/**
 * optional int64 log_date = 16;
 * @return {number}
 */
proto.data.WorkflowProcess.prototype.getLogDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowProcess} returns this
 */
proto.data.WorkflowProcess.prototype.setLogDate = function(value) {
  return jspb.Message.setProto3IntField(this, 16, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.WorkflowEvent.prototype.toObject = function(opt_includeInstance) {
  return proto.data.WorkflowEvent.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.WorkflowEvent} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowEvent.toObject = function(includeInstance, msg) {
  var f, obj = {
    nodeUuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    nodeName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    uuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 5, ""),
    userUuid: jspb.Message.getFieldWithDefault(msg, 6, ""),
    userName: jspb.Message.getFieldWithDefault(msg, 7, ""),
    responsibleUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    responsibleName: jspb.Message.getFieldWithDefault(msg, 9, ""),
    textMessage: jspb.Message.getFieldWithDefault(msg, 10, ""),
    timeElapsed: jspb.Message.getFieldWithDefault(msg, 11, 0),
    attributeName: jspb.Message.getFieldWithDefault(msg, 12, ""),
    oldValue: jspb.Message.getFieldWithDefault(msg, 13, ""),
    newValue: jspb.Message.getFieldWithDefault(msg, 14, ""),
    workflowState: jspb.Message.getFieldWithDefault(msg, 15, 0),
    eventType: jspb.Message.getFieldWithDefault(msg, 16, 0),
    logDate: jspb.Message.getFieldWithDefault(msg, 17, 0)
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.WorkflowEvent}
 */
proto.data.WorkflowEvent.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.WorkflowEvent;
  return proto.data.WorkflowEvent.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.WorkflowEvent} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.WorkflowEvent}
 */
proto.data.WorkflowEvent.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setNodeName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserUuid(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setUserName(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setResponsibleName(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setTextMessage(value);
      break;
    case 11:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setTimeElapsed(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setAttributeName(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setOldValue(value);
      break;
    case 14:
      var value = /** @type {string} */ (reader.readString());
      msg.setNewValue(value);
      break;
    case 15:
      var value = /** @type {!proto.data.WorkflowEvent.WorkflowState} */ (reader.readEnum());
      msg.setWorkflowState(value);
      break;
    case 16:
      var value = /** @type {!proto.data.WorkflowEvent.EventType} */ (reader.readEnum());
      msg.setEventType(value);
      break;
    case 17:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setLogDate(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.WorkflowEvent.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.WorkflowEvent.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.WorkflowEvent} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.WorkflowEvent.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getNodeUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getNodeName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
  f = message.getUserUuid();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getUserName();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getResponsibleUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getResponsibleName();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getTextMessage();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getTimeElapsed();
  if (f !== 0) {
    writer.writeInt64(
      11,
      f
    );
  }
  f = message.getAttributeName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getOldValue();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
  f = message.getNewValue();
  if (f.length > 0) {
    writer.writeString(
      14,
      f
    );
  }
  f = message.getWorkflowState();
  if (f !== 0.0) {
    writer.writeEnum(
      15,
      f
    );
  }
  f = message.getEventType();
  if (f !== 0.0) {
    writer.writeEnum(
      16,
      f
    );
  }
  f = message.getLogDate();
  if (f !== 0) {
    writer.writeInt64(
      17,
      f
    );
  }
};


/**
 * @enum {number}
 */
proto.data.WorkflowEvent.WorkflowState = {
  RUNNING: 0,
  COMPLETED: 1,
  ABORTED: 2,
  TERMINATED: 3,
  SUSPENDED: 4,
  NOT_STARTED: 5
};

/**
 * @enum {number}
 */
proto.data.WorkflowEvent.EventType = {
  PROCESS_CREATED: 0,
  PROCESS_COMPLETED: 1,
  STATE_CHANGED: 2
};

/**
 * optional string node_uuid = 1;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getNodeUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setNodeUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string node_name = 2;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getNodeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setNodeName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.WorkflowEvent.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string uuid = 4;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional string table_name = 5;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};


/**
 * optional string user_uuid = 6;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getUserUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setUserUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string user_name = 7;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getUserName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setUserName = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string responsible_uuid = 8;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getResponsibleUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setResponsibleUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string responsible_name = 9;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getResponsibleName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setResponsibleName = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string text_message = 10;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getTextMessage = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setTextMessage = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional int64 time_elapsed = 11;
 * @return {number}
 */
proto.data.WorkflowEvent.prototype.getTimeElapsed = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 11, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setTimeElapsed = function(value) {
  return jspb.Message.setProto3IntField(this, 11, value);
};


/**
 * optional string attribute_name = 12;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getAttributeName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setAttributeName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string old_value = 13;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getOldValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setOldValue = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


/**
 * optional string new_value = 14;
 * @return {string}
 */
proto.data.WorkflowEvent.prototype.getNewValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 14, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setNewValue = function(value) {
  return jspb.Message.setProto3StringField(this, 14, value);
};


/**
 * optional WorkflowState workflow_state = 15;
 * @return {!proto.data.WorkflowEvent.WorkflowState}
 */
proto.data.WorkflowEvent.prototype.getWorkflowState = function() {
  return /** @type {!proto.data.WorkflowEvent.WorkflowState} */ (jspb.Message.getFieldWithDefault(this, 15, 0));
};


/**
 * @param {!proto.data.WorkflowEvent.WorkflowState} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setWorkflowState = function(value) {
  return jspb.Message.setProto3EnumField(this, 15, value);
};


/**
 * optional EventType event_type = 16;
 * @return {!proto.data.WorkflowEvent.EventType}
 */
proto.data.WorkflowEvent.prototype.getEventType = function() {
  return /** @type {!proto.data.WorkflowEvent.EventType} */ (jspb.Message.getFieldWithDefault(this, 16, 0));
};


/**
 * @param {!proto.data.WorkflowEvent.EventType} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setEventType = function(value) {
  return jspb.Message.setProto3EnumField(this, 16, value);
};


/**
 * optional int64 log_date = 17;
 * @return {number}
 */
proto.data.WorkflowEvent.prototype.getLogDate = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 17, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.WorkflowEvent} returns this
 */
proto.data.WorkflowEvent.prototype.setLogDate = function(value) {
  return jspb.Message.setProto3IntField(this, 17, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListWorkflowLogsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListWorkflowLogsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListWorkflowLogsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListWorkflowLogsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    workflowLogsList: jspb.Message.toObjectList(msg.getWorkflowLogsList(),
    proto.data.WorkflowProcess.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListWorkflowLogsResponse}
 */
proto.data.ListWorkflowLogsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListWorkflowLogsResponse;
  return proto.data.ListWorkflowLogsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListWorkflowLogsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListWorkflowLogsResponse}
 */
proto.data.ListWorkflowLogsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto.data.WorkflowProcess;
      reader.readMessage(value,proto.data.WorkflowProcess.deserializeBinaryFromReader);
      msg.addWorkflowLogs(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListWorkflowLogsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListWorkflowLogsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListWorkflowLogsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListWorkflowLogsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getWorkflowLogsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto.data.WorkflowProcess.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListWorkflowLogsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
 */
proto.data.ListWorkflowLogsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated WorkflowProcess workflow_logs = 2;
 * @return {!Array<!proto.data.WorkflowProcess>}
 */
proto.data.ListWorkflowLogsResponse.prototype.getWorkflowLogsList = function() {
  return /** @type{!Array<!proto.data.WorkflowProcess>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto.data.WorkflowProcess, 2));
};


/**
 * @param {!Array<!proto.data.WorkflowProcess>} value
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
*/
proto.data.ListWorkflowLogsResponse.prototype.setWorkflowLogsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.WorkflowProcess=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.WorkflowProcess}
 */
proto.data.ListWorkflowLogsResponse.prototype.addWorkflowLogs = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.WorkflowProcess, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
 */
proto.data.ListWorkflowLogsResponse.prototype.clearWorkflowLogsList = function() {
  return this.setWorkflowLogsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListWorkflowLogsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListWorkflowLogsResponse} returns this
 */
proto.data.ListWorkflowLogsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReportViewsRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReportViewsRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReportViewsRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    processUuid: jspb.Message.getFieldWithDefault(msg, 3, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 4, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 5, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReportViewsRequest}
 */
proto.data.ListReportViewsRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReportViewsRequest;
  return proto.data.ListReportViewsRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReportViewsRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReportViewsRequest}
 */
proto.data.ListReportViewsRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessUuid(value);
      break;
    case 4:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 5:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReportViewsRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReportViewsRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReportViewsRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getProcessUuid();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      4,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      5,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListReportViewsRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListReportViewsRequest} returns this
*/
proto.data.ListReportViewsRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListReportViewsRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional string process_uuid = 3;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getProcessUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setProcessUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional int32 page_size = 4;
 * @return {number}
 */
proto.data.ListReportViewsRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 4, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 4, value);
};


/**
 * optional string page_token = 5;
 * @return {string}
 */
proto.data.ListReportViewsRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 5, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsRequest} returns this
 */
proto.data.ListReportViewsRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 5, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListReportViewsResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReportViewsResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReportViewsResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReportViewsResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    reportViewsList: jspb.Message.toObjectList(msg.getReportViewsList(),
    proto_base_data_type_pb.ReportView.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReportViewsResponse}
 */
proto.data.ListReportViewsResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReportViewsResponse;
  return proto.data.ListReportViewsResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReportViewsResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReportViewsResponse}
 */
proto.data.ListReportViewsResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.ReportView;
      reader.readMessage(value,proto_base_data_type_pb.ReportView.deserializeBinaryFromReader);
      msg.addReportViews(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReportViewsResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReportViewsResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReportViewsResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReportViewsResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReportViewsList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.ReportView.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListReportViewsResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated ReportView report_views = 2;
 * @return {!Array<!proto.data.ReportView>}
 */
proto.data.ListReportViewsResponse.prototype.getReportViewsList = function() {
  return /** @type{!Array<!proto.data.ReportView>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.ReportView, 2));
};


/**
 * @param {!Array<!proto.data.ReportView>} value
 * @return {!proto.data.ListReportViewsResponse} returns this
*/
proto.data.ListReportViewsResponse.prototype.setReportViewsList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.ReportView=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.ReportView}
 */
proto.data.ListReportViewsResponse.prototype.addReportViews = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.ReportView, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.clearReportViewsList = function() {
  return this.setReportViewsList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListReportViewsResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReportViewsResponse} returns this
 */
proto.data.ListReportViewsResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDrillTablesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDrillTablesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDrillTablesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    pageSize: jspb.Message.getFieldWithDefault(msg, 3, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 4, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDrillTablesRequest}
 */
proto.data.ListDrillTablesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDrillTablesRequest;
  return proto.data.ListDrillTablesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDrillTablesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDrillTablesRequest}
 */
proto.data.ListDrillTablesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDrillTablesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDrillTablesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDrillTablesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListDrillTablesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
*/
proto.data.ListDrillTablesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListDrillTablesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListDrillTablesRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 page_size = 3;
 * @return {number}
 */
proto.data.ListDrillTablesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string page_token = 4;
 * @return {string}
 */
proto.data.ListDrillTablesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesRequest} returns this
 */
proto.data.ListDrillTablesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListDrillTablesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListDrillTablesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListDrillTablesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListDrillTablesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    drillTablesList: jspb.Message.toObjectList(msg.getDrillTablesList(),
    proto_base_data_type_pb.DrillTable.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListDrillTablesResponse}
 */
proto.data.ListDrillTablesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListDrillTablesResponse;
  return proto.data.ListDrillTablesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListDrillTablesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListDrillTablesResponse}
 */
proto.data.ListDrillTablesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.DrillTable;
      reader.readMessage(value,proto_base_data_type_pb.DrillTable.deserializeBinaryFromReader);
      msg.addDrillTables(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListDrillTablesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListDrillTablesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListDrillTablesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListDrillTablesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getDrillTablesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.DrillTable.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListDrillTablesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated DrillTable drill_tables = 2;
 * @return {!Array<!proto.data.DrillTable>}
 */
proto.data.ListDrillTablesResponse.prototype.getDrillTablesList = function() {
  return /** @type{!Array<!proto.data.DrillTable>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.DrillTable, 2));
};


/**
 * @param {!Array<!proto.data.DrillTable>} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
*/
proto.data.ListDrillTablesResponse.prototype.setDrillTablesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.DrillTable=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.DrillTable}
 */
proto.data.ListDrillTablesResponse.prototype.addDrillTables = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.DrillTable, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.clearDrillTablesList = function() {
  return this.setDrillTablesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListDrillTablesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListDrillTablesResponse} returns this
 */
proto.data.ListDrillTablesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};





if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReferencesRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReferencesRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReferencesRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    uuid: jspb.Message.getFieldWithDefault(msg, 1, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 2, ""),
    id: jspb.Message.getFieldWithDefault(msg, 3, 0),
    windowUuid: jspb.Message.getFieldWithDefault(msg, 4, ""),
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 6, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 7, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReferencesRequest}
 */
proto.data.ListReferencesRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReferencesRequest;
  return proto.data.ListReferencesRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReferencesRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReferencesRequest}
 */
proto.data.ListReferencesRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {string} */ (reader.readString());
      msg.setUuid(value);
      break;
    case 2:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 3:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setId(value);
      break;
    case 4:
      var value = /** @type {string} */ (reader.readString());
      msg.setWindowUuid(value);
      break;
    case 5:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 6:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReferencesRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReferencesRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReferencesRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getUuid();
  if (f.length > 0) {
    writer.writeString(
      1,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      2,
      f
    );
  }
  f = message.getId();
  if (f !== 0) {
    writer.writeInt32(
      3,
      f
    );
  }
  f = message.getWindowUuid();
  if (f.length > 0) {
    writer.writeString(
      4,
      f
    );
  }
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      5,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      6,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
};


/**
 * optional string uuid = 1;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 1, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 1, value);
};


/**
 * optional string table_name = 2;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 2, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 2, value);
};


/**
 * optional int32 id = 3;
 * @return {number}
 */
proto.data.ListReferencesRequest.prototype.getId = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 3, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setId = function(value) {
  return jspb.Message.setProto3IntField(this, 3, value);
};


/**
 * optional string window_uuid = 4;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getWindowUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 4, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setWindowUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 4, value);
};


/**
 * optional ClientRequest client_request = 5;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListReferencesRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 5));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListReferencesRequest} returns this
*/
proto.data.ListReferencesRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 5, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListReferencesRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 5) != null;
};


/**
 * optional int32 page_size = 6;
 * @return {number}
 */
proto.data.ListReferencesRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 6, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 6, value);
};


/**
 * optional string page_token = 7;
 * @return {string}
 */
proto.data.ListReferencesRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesRequest} returns this
 */
proto.data.ListReferencesRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListReferencesResponse.repeatedFields_ = [2];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListReferencesResponse.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListReferencesResponse.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListReferencesResponse} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesResponse.toObject = function(includeInstance, msg) {
  var f, obj = {
    recordCount: jspb.Message.getFieldWithDefault(msg, 1, 0),
    referencesList: jspb.Message.toObjectList(msg.getReferencesList(),
    proto_base_data_type_pb.RecordReferenceInfo.toObject, includeInstance),
    nextPageToken: jspb.Message.getFieldWithDefault(msg, 3, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListReferencesResponse}
 */
proto.data.ListReferencesResponse.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListReferencesResponse;
  return proto.data.ListReferencesResponse.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListReferencesResponse} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListReferencesResponse}
 */
proto.data.ListReferencesResponse.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = /** @type {number} */ (reader.readInt64());
      msg.setRecordCount(value);
      break;
    case 2:
      var value = new proto_base_data_type_pb.RecordReferenceInfo;
      reader.readMessage(value,proto_base_data_type_pb.RecordReferenceInfo.deserializeBinaryFromReader);
      msg.addReferences(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setNextPageToken(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListReferencesResponse.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListReferencesResponse.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListReferencesResponse} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListReferencesResponse.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getRecordCount();
  if (f !== 0) {
    writer.writeInt64(
      1,
      f
    );
  }
  f = message.getReferencesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      2,
      f,
      proto_base_data_type_pb.RecordReferenceInfo.serializeBinaryToWriter
    );
  }
  f = message.getNextPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
};


/**
 * optional int64 record_count = 1;
 * @return {number}
 */
proto.data.ListReferencesResponse.prototype.getRecordCount = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 1, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.setRecordCount = function(value) {
  return jspb.Message.setProto3IntField(this, 1, value);
};


/**
 * repeated RecordReferenceInfo references = 2;
 * @return {!Array<!proto.data.RecordReferenceInfo>}
 */
proto.data.ListReferencesResponse.prototype.getReferencesList = function() {
  return /** @type{!Array<!proto.data.RecordReferenceInfo>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.RecordReferenceInfo, 2));
};


/**
 * @param {!Array<!proto.data.RecordReferenceInfo>} value
 * @return {!proto.data.ListReferencesResponse} returns this
*/
proto.data.ListReferencesResponse.prototype.setReferencesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 2, value);
};


/**
 * @param {!proto.data.RecordReferenceInfo=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.RecordReferenceInfo}
 */
proto.data.ListReferencesResponse.prototype.addReferences = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 2, opt_value, proto.data.RecordReferenceInfo, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.clearReferencesList = function() {
  return this.setReferencesList([]);
};


/**
 * optional string next_page_token = 3;
 * @return {string}
 */
proto.data.ListReferencesResponse.prototype.getNextPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListReferencesResponse} returns this
 */
proto.data.ListReferencesResponse.prototype.setNextPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};



/**
 * List of repeated fields within this message type.
 * @private {!Array<number>}
 * @const
 */
proto.data.ListGeneralInfoRequest.repeatedFields_ = [5];



if (jspb.Message.GENERATE_TO_OBJECT) {
/**
 * Creates an object representation of this proto.
 * Field names that are reserved in JavaScript and will be renamed to pb_name.
 * Optional fields that are not set will be set to undefined.
 * To access a reserved field use, foo.pb_<name>, eg, foo.pb_default.
 * For the list of reserved names please see:
 *     net/proto2/compiler/js/internal/generator.cc#kKeyword.
 * @param {boolean=} opt_includeInstance Deprecated. whether to include the
 *     JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @return {!Object}
 */
proto.data.ListGeneralInfoRequest.prototype.toObject = function(opt_includeInstance) {
  return proto.data.ListGeneralInfoRequest.toObject(opt_includeInstance, this);
};


/**
 * Static version of the {@see toObject} method.
 * @param {boolean|undefined} includeInstance Deprecated. Whether to include
 *     the JSPB instance for transitional soy proto support:
 *     http://goto/soy-param-migration
 * @param {!proto.data.ListGeneralInfoRequest} msg The msg instance to transform.
 * @return {!Object}
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListGeneralInfoRequest.toObject = function(includeInstance, msg) {
  var f, obj = {
    clientRequest: (f = msg.getClientRequest()) && proto_client_pb.ClientRequest.toObject(includeInstance, f),
    pageSize: jspb.Message.getFieldWithDefault(msg, 2, 0),
    pageToken: jspb.Message.getFieldWithDefault(msg, 3, ""),
    filters: (f = msg.getFilters()) && proto_base_data_type_pb.Criteria.toObject(includeInstance, f),
    contextAttributesList: jspb.Message.toObjectList(msg.getContextAttributesList(),
    proto_base_data_type_pb.KeyValue.toObject, includeInstance),
    searchValue: jspb.Message.getFieldWithDefault(msg, 6, ""),
    processParameterUuid: jspb.Message.getFieldWithDefault(msg, 7, ""),
    fieldUuid: jspb.Message.getFieldWithDefault(msg, 8, ""),
    browseFieldUuid: jspb.Message.getFieldWithDefault(msg, 9, ""),
    referenceUuid: jspb.Message.getFieldWithDefault(msg, 10, ""),
    columnUuid: jspb.Message.getFieldWithDefault(msg, 11, ""),
    tableName: jspb.Message.getFieldWithDefault(msg, 12, ""),
    columnName: jspb.Message.getFieldWithDefault(msg, 13, "")
  };

  if (includeInstance) {
    obj.$jspbMessageInstance = msg;
  }
  return obj;
};
}


/**
 * Deserializes binary data (in protobuf wire format).
 * @param {jspb.ByteSource} bytes The bytes to deserialize.
 * @return {!proto.data.ListGeneralInfoRequest}
 */
proto.data.ListGeneralInfoRequest.deserializeBinary = function(bytes) {
  var reader = new jspb.BinaryReader(bytes);
  var msg = new proto.data.ListGeneralInfoRequest;
  return proto.data.ListGeneralInfoRequest.deserializeBinaryFromReader(msg, reader);
};


/**
 * Deserializes binary data (in protobuf wire format) from the
 * given reader into the given message object.
 * @param {!proto.data.ListGeneralInfoRequest} msg The message object to deserialize into.
 * @param {!jspb.BinaryReader} reader The BinaryReader to use.
 * @return {!proto.data.ListGeneralInfoRequest}
 */
proto.data.ListGeneralInfoRequest.deserializeBinaryFromReader = function(msg, reader) {
  while (reader.nextField()) {
    if (reader.isEndGroup()) {
      break;
    }
    var field = reader.getFieldNumber();
    switch (field) {
    case 1:
      var value = new proto_client_pb.ClientRequest;
      reader.readMessage(value,proto_client_pb.ClientRequest.deserializeBinaryFromReader);
      msg.setClientRequest(value);
      break;
    case 2:
      var value = /** @type {number} */ (reader.readInt32());
      msg.setPageSize(value);
      break;
    case 3:
      var value = /** @type {string} */ (reader.readString());
      msg.setPageToken(value);
      break;
    case 4:
      var value = new proto_base_data_type_pb.Criteria;
      reader.readMessage(value,proto_base_data_type_pb.Criteria.deserializeBinaryFromReader);
      msg.setFilters(value);
      break;
    case 5:
      var value = new proto_base_data_type_pb.KeyValue;
      reader.readMessage(value,proto_base_data_type_pb.KeyValue.deserializeBinaryFromReader);
      msg.addContextAttributes(value);
      break;
    case 6:
      var value = /** @type {string} */ (reader.readString());
      msg.setSearchValue(value);
      break;
    case 7:
      var value = /** @type {string} */ (reader.readString());
      msg.setProcessParameterUuid(value);
      break;
    case 8:
      var value = /** @type {string} */ (reader.readString());
      msg.setFieldUuid(value);
      break;
    case 9:
      var value = /** @type {string} */ (reader.readString());
      msg.setBrowseFieldUuid(value);
      break;
    case 10:
      var value = /** @type {string} */ (reader.readString());
      msg.setReferenceUuid(value);
      break;
    case 11:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnUuid(value);
      break;
    case 12:
      var value = /** @type {string} */ (reader.readString());
      msg.setTableName(value);
      break;
    case 13:
      var value = /** @type {string} */ (reader.readString());
      msg.setColumnName(value);
      break;
    default:
      reader.skipField();
      break;
    }
  }
  return msg;
};


/**
 * Serializes the message to binary data (in protobuf wire format).
 * @return {!Uint8Array}
 */
proto.data.ListGeneralInfoRequest.prototype.serializeBinary = function() {
  var writer = new jspb.BinaryWriter();
  proto.data.ListGeneralInfoRequest.serializeBinaryToWriter(this, writer);
  return writer.getResultBuffer();
};


/**
 * Serializes the given message to binary data (in protobuf wire
 * format), writing to the given BinaryWriter.
 * @param {!proto.data.ListGeneralInfoRequest} message
 * @param {!jspb.BinaryWriter} writer
 * @suppress {unusedLocalVariables} f is only used for nested messages
 */
proto.data.ListGeneralInfoRequest.serializeBinaryToWriter = function(message, writer) {
  var f = undefined;
  f = message.getClientRequest();
  if (f != null) {
    writer.writeMessage(
      1,
      f,
      proto_client_pb.ClientRequest.serializeBinaryToWriter
    );
  }
  f = message.getPageSize();
  if (f !== 0) {
    writer.writeInt32(
      2,
      f
    );
  }
  f = message.getPageToken();
  if (f.length > 0) {
    writer.writeString(
      3,
      f
    );
  }
  f = message.getFilters();
  if (f != null) {
    writer.writeMessage(
      4,
      f,
      proto_base_data_type_pb.Criteria.serializeBinaryToWriter
    );
  }
  f = message.getContextAttributesList();
  if (f.length > 0) {
    writer.writeRepeatedMessage(
      5,
      f,
      proto_base_data_type_pb.KeyValue.serializeBinaryToWriter
    );
  }
  f = message.getSearchValue();
  if (f.length > 0) {
    writer.writeString(
      6,
      f
    );
  }
  f = message.getProcessParameterUuid();
  if (f.length > 0) {
    writer.writeString(
      7,
      f
    );
  }
  f = message.getFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      8,
      f
    );
  }
  f = message.getBrowseFieldUuid();
  if (f.length > 0) {
    writer.writeString(
      9,
      f
    );
  }
  f = message.getReferenceUuid();
  if (f.length > 0) {
    writer.writeString(
      10,
      f
    );
  }
  f = message.getColumnUuid();
  if (f.length > 0) {
    writer.writeString(
      11,
      f
    );
  }
  f = message.getTableName();
  if (f.length > 0) {
    writer.writeString(
      12,
      f
    );
  }
  f = message.getColumnName();
  if (f.length > 0) {
    writer.writeString(
      13,
      f
    );
  }
};


/**
 * optional ClientRequest client_request = 1;
 * @return {?proto.data.ClientRequest}
 */
proto.data.ListGeneralInfoRequest.prototype.getClientRequest = function() {
  return /** @type{?proto.data.ClientRequest} */ (
    jspb.Message.getWrapperField(this, proto_client_pb.ClientRequest, 1));
};


/**
 * @param {?proto.data.ClientRequest|undefined} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
*/
proto.data.ListGeneralInfoRequest.prototype.setClientRequest = function(value) {
  return jspb.Message.setWrapperField(this, 1, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.clearClientRequest = function() {
  return this.setClientRequest(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListGeneralInfoRequest.prototype.hasClientRequest = function() {
  return jspb.Message.getField(this, 1) != null;
};


/**
 * optional int32 page_size = 2;
 * @return {number}
 */
proto.data.ListGeneralInfoRequest.prototype.getPageSize = function() {
  return /** @type {number} */ (jspb.Message.getFieldWithDefault(this, 2, 0));
};


/**
 * @param {number} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setPageSize = function(value) {
  return jspb.Message.setProto3IntField(this, 2, value);
};


/**
 * optional string page_token = 3;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getPageToken = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 3, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setPageToken = function(value) {
  return jspb.Message.setProto3StringField(this, 3, value);
};


/**
 * optional Criteria filters = 4;
 * @return {?proto.data.Criteria}
 */
proto.data.ListGeneralInfoRequest.prototype.getFilters = function() {
  return /** @type{?proto.data.Criteria} */ (
    jspb.Message.getWrapperField(this, proto_base_data_type_pb.Criteria, 4));
};


/**
 * @param {?proto.data.Criteria|undefined} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
*/
proto.data.ListGeneralInfoRequest.prototype.setFilters = function(value) {
  return jspb.Message.setWrapperField(this, 4, value);
};


/**
 * Clears the message field making it undefined.
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.clearFilters = function() {
  return this.setFilters(undefined);
};


/**
 * Returns whether this field is set.
 * @return {boolean}
 */
proto.data.ListGeneralInfoRequest.prototype.hasFilters = function() {
  return jspb.Message.getField(this, 4) != null;
};


/**
 * repeated KeyValue context_attributes = 5;
 * @return {!Array<!proto.data.KeyValue>}
 */
proto.data.ListGeneralInfoRequest.prototype.getContextAttributesList = function() {
  return /** @type{!Array<!proto.data.KeyValue>} */ (
    jspb.Message.getRepeatedWrapperField(this, proto_base_data_type_pb.KeyValue, 5));
};


/**
 * @param {!Array<!proto.data.KeyValue>} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
*/
proto.data.ListGeneralInfoRequest.prototype.setContextAttributesList = function(value) {
  return jspb.Message.setRepeatedWrapperField(this, 5, value);
};


/**
 * @param {!proto.data.KeyValue=} opt_value
 * @param {number=} opt_index
 * @return {!proto.data.KeyValue}
 */
proto.data.ListGeneralInfoRequest.prototype.addContextAttributes = function(opt_value, opt_index) {
  return jspb.Message.addToRepeatedWrapperField(this, 5, opt_value, proto.data.KeyValue, opt_index);
};


/**
 * Clears the list making it empty but non-null.
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.clearContextAttributesList = function() {
  return this.setContextAttributesList([]);
};


/**
 * optional string search_value = 6;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getSearchValue = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 6, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setSearchValue = function(value) {
  return jspb.Message.setProto3StringField(this, 6, value);
};


/**
 * optional string process_parameter_uuid = 7;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getProcessParameterUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 7, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setProcessParameterUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 7, value);
};


/**
 * optional string field_uuid = 8;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 8, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 8, value);
};


/**
 * optional string browse_field_uuid = 9;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getBrowseFieldUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 9, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setBrowseFieldUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 9, value);
};


/**
 * optional string reference_uuid = 10;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getReferenceUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 10, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setReferenceUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 10, value);
};


/**
 * optional string column_uuid = 11;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getColumnUuid = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 11, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setColumnUuid = function(value) {
  return jspb.Message.setProto3StringField(this, 11, value);
};


/**
 * optional string table_name = 12;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getTableName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 12, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setTableName = function(value) {
  return jspb.Message.setProto3StringField(this, 12, value);
};


/**
 * optional string column_name = 13;
 * @return {string}
 */
proto.data.ListGeneralInfoRequest.prototype.getColumnName = function() {
  return /** @type {string} */ (jspb.Message.getFieldWithDefault(this, 13, ""));
};


/**
 * @param {string} value
 * @return {!proto.data.ListGeneralInfoRequest} returns this
 */
proto.data.ListGeneralInfoRequest.prototype.setColumnName = function(value) {
  return jspb.Message.setProto3StringField(this, 13, value);
};


goog.object.extend(exports, proto.data);
