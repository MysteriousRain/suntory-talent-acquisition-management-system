$.confirm({
    buttons: {
        hey: function () {
            // here the button key 'hey' will be used as the text.
            $.alert('You clicked on "hey".');
        },
        heyThere: {
            text: 'hey there!', // With spaces and symbols
            action: function () {
                $.alert('You clicked on "heyThere"');
            }
        }
    }
});