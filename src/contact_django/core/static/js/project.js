(function() {
    var ContactModel = Backbone.Model.extend({
        urlRoot: "/api/contact",
        defaults: {
            name: "",
            email: "",
            mobile: ""
        }
    });


    var ContactList = Backbone.Collection.extend({
        model: ContactModel,
        url: "/api/contact"
    });




    var o = new ContactModel({
        name: "Olivier",
        email: "olivier@...",
        mobile: "077..."
    });

    o.save({}, {
        success: function(model) {
            console.log("saved", model);
        },
        error: function(model) {
            alert("Failed saving " + model.get("name"));
        }
    });


    var ContactView = Backbone.View.extend({

        tagName: "tr",

        initialize: function(){
            this.listenTo(this.model, 'change', this.render);
            this.listenTo(this.model, 'destroy', this.remove);
            this.render();
        },

        template: _.template($('#contact_template').html()),

        render: function(){
            this.$el.html(this.template(this.model.toJSON()));
            return this;
        }
    });



    var c = new ContactModel({id: 1});
    c.fetch({
        success: function(contact) {
            console.log("read", contact);
            var contact_view = new ContactView({
                el: $("#test_contact"),
                model: c
            });
        }
    });

    var contacts = new ContactList;

    var AppView = Backbone.View.extend({
        el: $("#contact_editor"),

        initialize: function() {
            this.listenTo(contacts, 'add', this.addOne);
            this.listenTo(contacts, 'reset', this.addAll);
            //this.listenTo(contacts, 'all', this.render);

            contacts.fetch();
        },

        addOne: function(contact) {
            var view = new ContactView({model: contact});
            this.$("#contact_list").append(view.render().el);
        },

        addAll: function() {
            contacts.each(this.addOne, this);
        }
    });



    var App = new AppView;

})()