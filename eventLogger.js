class EvLog{

    logEvBtn(){
        var loggerBtn = document.getElementById('loggerBtn');
        var clearBtn = document.getElementById('clearBtn');
        let sum = 0;


        document.addEventListener('click', function(){
            sum = sum + 1;
            document.getElementById('cardContainer').innerHTML = sum;
        });
    }

    /*
    logData(){
        const timestamp = new Date().toLocaleString();
        this.loggedData.push(timestamp);
        this.updateCardContainer();
    }
    */

}