// Use this sample to create your own voice commands
intent('hello world', p => {
    p.play('(hello|hi there)');
});

intent(`Go to the stock (information|) page`, p => {
  p.play({command: 'navigation', route: '/stock-grid'});
  p.play(`Opening the stock information page...`);
});

intent(`Go to the article (information|) page`, p => {
  p.play({command: 'navigation', route: '/article-grid'});
  p.play(`Opening the article information page...`);
});

intent(`Go to the goods (receipt|) page`, p => {
  p.play({command: 'navigation', route: '/goods-receiving-grid'});
  p.play(`Opening the goods receipt page...`);
});

intent(`Go to the order page`, p => {
  p.play({command: 'navigation', route: '/commission-grid'});
  p.play(`Opening the order page...`);
});

/*onCreateUser(p => {
    p.userData.index = {en: "1|2|3|4"};
    p.userData.articleNumber = {en: "202028|202023|202018|202016"};
    p.userData.descriptions = {en: "calculator|pen|safety sign|suitcase"};
    p.userData.batch = {en: "24685|87495"};
    p.userData.variant = {en: "red|blue|yellow"};
    p.userData.weight = {en: "0.03|0.01|0.31|2.91"};
    p.userData.location = {en: "BEW|BVE|FBL020101"};
    p.userData.pid = {en: "201910|201587|9000113|9000114"};
    p.userData.quantity = {en: "1|2|3"};
    p.userData.storingDate = {en: "19.10.2022|18.10.2022"};
}); */

onVisualState((p, s) => {
    if (s.values) {
        p.visual.wordlist = { en: ""};
        p.visual.wordlist.en = s.values.join('|');
    }
});

intent('Show me all the items containing the (word|phrase) $(ITEM~ v:wordlist)', p => {
  p.play({command: 'setType', type: p.ITEM.value});
  p.play(`Showing all the items containing the word ${p.ITEM.value}`);
});

/* intent('Add $(ITEM* .+) to (the|) stock (information|) (table|) (with|) (the|) (article number|) $(ARTNUMBER* .+|) (and|) (the|) (batch number|) $(BATCH* .+|)', p => {
    p.userData.descriptions.en += '|' + p.ITEM.value;
    p.play({command: 'addItem', item: p.ITEM.value, artNumber: p.ARTNUMBER.value, batch: p.BATCH.value});
    p.play(`${p.ITEM.value} is added`);
}); */

intent('(Add|include) (the|) article number $(ARTNUMBER* .+) (to the form|to form|)', p => {
    p.play({command: 'addArtNumber', artNumber: p.ARTNUMBER.value});
    p.play(`The article number ${p.ARTNUMBER.value} has been added`);
});

intent('(Add|include) (the|) description $(DESCRIPTION* .+) (to the form|to form|)', p => {
    p.play({command: 'addDescription', description: p.DESCRIPTION.value});
    p.play(`${p.DESCRIPTION.value} has been added`);
});

intent('(Add|include) (the|) batch number $(BATCH* .+) (to the form|to form|)', p => {
    p.play({command: 'addBatch', batch: p.BATCH.value});
    p.play(`The batch number ${p.BATCH.value} has been added`);
});

intent('(Add|include) (the|) (variant|color) $(VARIANT* .+) (to the form|to form|)', p => {
    p.play({command: 'addVariant', variant: p.VARIANT.value});
    p.play(`The variant ${p.VARIANT.value} has been added`);
});

intent('(Add|include) (the|) weight $(WEIGHT* .+) (to the form|to form|)', p => {
    p.play({command: 'addWeight', weight: p.WEIGHT.value});
    p.play(`The weight ${p.WEIGHT.value} has been added`);
}); 

intent('(Add|include) (the|) location $(PLACE* .+) (to the form|to form|)', p => {
    p.play({command: 'addLocation', location: p.PLACE.value});
    p.play(`The location ${p.PLACE.value} has been added`);
}); 

intent('(Add|include) (the|) PID number $(PID* .+) (to the form|to form|)', p => {
    p.play({command: 'addPID', pid: p.PID.value});
    p.play(`The PID number ${p.PID.value} has been added`);
}); 

intent('(Add|include) (the|) quantity (number|) $(QUANTITY* .+) (to the form|to form|)', p => {
    p.play({command: 'addQuantity', quantity: p.QUANTITY.value});
    p.play(`The quantity ${p.QUANTITY.value} has been added`);
}); 

intent('(Add|include) (the|) storing date $(STORINGDATE* .+) (to the form|to form|)', p => {
    p.play({command: 'addDate', date: p.STORINGDATE.value});
    p.play(`The storing date ${p.STORINGDATE.value} has been added`);
}); 

intent('(Add|save) (the|) item (to stock|to stock table|to the stock table|to the stock information table)', p => {
    p.play({command: 'addItem'});
    p.play(`Item has been added`);
}); 

intent('(Clear the form|Delete the items in the form)', p => {
    p.play({command: 'clearForm'});
    p.play(`Form has been cleared`);
}); 

intent('(Clear|empty) the search bar', p => {
    p.play({command: 'clearSearchbar'});
    p.play(`Search bar has been cleared`);
}); 

intent('Delete the item with the index $(NUMBER) (from the table|)', p => {
    p.play({command: 'deleteItem', index: p.NUMBER.value});
    p.play(`Item with the index ${p.NUMBER.value} has been deleted from the table`);
}); 

/*intent(`Show me the $(TYPE calculator|pen|safety sign|suitcase)`, p => {
  p.play({command: 'setType', type: p.TYPE.value});
  p.play(`Now I am showing all the items containing the word ${p.TYPE.value}`);
}); */



/*intent(`Show me the $(DESCRIPTION u:descriptions)`, p => {
  p.play({command: 'setType', type: p.DESCRIPTION.value});
  p.play(`Now I am showing all the items containing the word ${p.DESCRIPTION.value}`);
}); 

intent(`Show me (all|) the (items|) (with the|) index $(INDEX u:index)`, p => {
  p.play({command: 'setType', type: p.INDEX.value});
  p.play(`Now I am showing all the items with the index ${p.INDEX.value}`);
});  */
