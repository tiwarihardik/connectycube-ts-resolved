const Config = require('../cubeConfig');
const Utils = require('../cubeInternalUtils');

const MESSAGES_API_URL = Config.urls.chat + '/Message';

class ChatMessagesService {
  constructor(proxy) {
    this.proxy = proxy;
  }

  list(params) {
    const ajaxParams = {
      url: Utils.getUrl(MESSAGES_API_URL),
      data: params,
    };

    return this.proxy.ajax(ajaxParams);
  }

  create(params) {
    const ajaxParams = {
      url: Utils.getUrl(MESSAGES_API_URL),
      type: 'POST',
      data: params,
    };

    return this.proxy.ajax(ajaxParams);
  }

  update(id, params) {
    const ajaxParams = {
      type: 'PUT',
      dataType: 'text',
      url: Utils.getUrl(MESSAGES_API_URL, id),
      data: params,
    };

    return this.proxy.ajax(ajaxParams);
  }

  delete(id, params = {}) {
    const ajaxParams = {
      url: Utils.getUrl(MESSAGES_API_URL, id),
      type: 'DELETE',
      dataType: 'text',
    };

    if (params) {
      ajaxParams.data = params;
    }

    return this.proxy.ajax(ajaxParams);
  }

  createSystem(params) {
    const ajaxParams = {
      url: Utils.getUrl(MESSAGES_API_URL + '/system'),
      type: 'POST',
      data: params,
    };

    return this.proxy.ajax(ajaxParams);
  }

  unreadCount(params) {
    const data = Utils.cloneObject(params);

    if (data && data.chat_dialog_ids && Utils.isArray(data.chat_dialog_ids)) {
      data.chat_dialog_ids = data.chat_dialog_ids.join(', ');
    }

    const ajaxParams = {
      url: Utils.getUrl(MESSAGES_API_URL + '/unread'),
      data: data,
    };

    return this.proxy.ajax(ajaxParams);
  }

  listReactions(messageId) {
    const ajaxParams = {
      type: 'GET',
      dataType: 'json',
      url: Utils.getUrl(MESSAGES_API_URL, messageId, 'reactions'),
      data: {},
    };

    return this.proxy.ajax(ajaxParams);
  }

  addReaction(messageId, reaction) {
    return this.updateReaction(messageId, reaction);
  }

  removeReaction(messageId, reaction) {
    return this.updateReaction(messageId, null, reaction);
  }

  updateReaction(messageId, addReaction, removeReaction) {
    const params = {};
    if (addReaction) {
      params['add'] = addReaction;
    }
    if (removeReaction) {
      params['remove'] = removeReaction;
    }
    const ajaxParams = {
      type: 'PUT',
      dataType: 'text',
      url: Utils.getUrl(MESSAGES_API_URL, messageId, 'reactions'),
      data: params,
    };

    return this.proxy.ajax(ajaxParams);
  }
}

module.exports = ChatMessagesService;
