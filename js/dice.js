'use strict'

    let dice_value = 0
    const box = document.getElementById('box');
    const p = document.getElementById('p');


    const reset = document.getElementById('reset');
    const btn = document.createElement('button');
    
    reset.appendChild(btn);
    btn.textContent = 'もう一回振る';

    btn.addEventListener( 'click' , () => {
        document.getElementById('result').src ="image/character_game_dice.png";
        p.textContent = 'クリックしてサイコロを振ってね！';
        
    });

    box.addEventListener('click' , () => {
			  if(dice_value > 0){
          return false;
				}
        dice_value = 1 + Math.floor(Math.random() * 6);
			  //サイコロの目が0以上だったらその場で終了


        switch (dice_value){
            case 1:
                document.getElementById('result').src ="image/dice1.png";
                p.textContent = `${n}でした！`;
                break;

            case 2:
                document.getElementById('result').src ="image/dice2.png";
                p.textContent = `${n}でした！`;
                break;

            case 3:
                document.getElementById('result').src ="image/dice3.png";
                p.textContent = `${n}でした！`;
                break;

            case 4:
                document.getElementById('result').src ="image/dice4.png";
                p.textContent = `${n}でした！`;
                break;

            case 5:
                document.getElementById('result').src ="image/dice5.png";
                p.textContent = `${n}でした！`;
                break;

            case 6:
                document.getElementById('result').src ="image/dice6.png";
                p.textContent = `${n}でした！`;
                break;
                
        }
    
    });
