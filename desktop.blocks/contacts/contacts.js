modules.define('i-bem__dom', ['i-bem'], function(provide, BEM, DOM) {

/**
 * @namespace
 * @name Contacts
 */
DOM.decl('contacts', /** @lends Contacts.prototype */ {

    onSetMod : {

        js : {
            inited : function() {
                this.listenShowContact();
                this.listenAddContact();
            }
        }

    },

    /**
     * Подписаться на событие разворачивания детальной информации по контакту
     */
    listenShowContact : function() {
        BEM.blocks['contact'].on(this.domElem, 'show', this.hideAllDetails.bind(this));
    },

    /**
     * Подписаться на событие добавления контакта
     */
    listenAddContact : function() {
        var addContact = this.findBlockInside('add-contact');
        if(addContact) addContact.on('add', this.addContact.bind(this));
    },

    /**
     * Добавить контакт
     * @param {Object} e Объект события
     * @param {Object} data Объект данных по событию
     */
    addContact : function(e, data) {
        this.elem('list').append(data.html);
    },

    /**
     * Скрыть все детальные данные по всем контактам
     */
    hideAllDetails : function() {
        this.findBlocksInside('contact').forEach(function(contact) {
            contact.hide();
        });
    }

});

provide(DOM);

});
