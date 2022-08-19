Component({  
    properties:{  
        name: {  
            type: Object,  
            observer: function(newVal, oldVal) {  
                console.log(newVal)  
            }  
        }  
    }  
})