(function(){
    'use strict'

    function renderList(){
        var row = document.querySelector('.row');

        for(var i=0; i<pokemons.length; i++){
            var col = document.createElement('div');
            col.classList = "col-md-4";

            var card = document.createElement('div');
            card.classList = "card mb-4 shadow-sm";
            
            var image = document.createElement('img');
            image.id = "pokemon-img"
            image.setAttribute('src', 'https://pokeres.bastionbot.org/images/pokemon/'+pokemons[i].id+'.png');

            var cardBody = document.createElement('div');
            cardBody.classList = "card-body";

            var small = document.createElement('small');
            small.classList = "text-muted";
            small.innerText = 'No.'+pokemons[i].id;

            var tag = document.createElement('h5');
            tag.innerText = pokemons[i].name.english;

            var type1 = document.createElement('span');
            type1.classList = "badge badge-primary";
            type1.innerText = pokemons[i].type[0];

            var type2;

            card.appendChild(image);
            cardBody.appendChild(small)
            cardBody.appendChild(tag);
            cardBody.appendChild(type1);

            if(!pokemons[i].type[1] == ''){
                var type2 = document.createElement('span');
                type2.classList = "badge badge-secondary";
                type2.innerText = pokemons[i].type[1];
                cardBody.appendChild(type2);
            }

            card.appendChild(cardBody);
            col.appendChild(card);
            row.appendChild(col);



        }
    }

    renderList();

})();