class Hotel {
    constructor(name, capacity) {
        this.name = name;
        this.capacity = capacity;
        this.bookings = [];
        this.currentBookingNumber = 1;

        this.single =Math.floor(capacity * 0.5);
        this.double =Math.floor(capacity * 0.3);
        this.maisonette = Math.floor(capacity * 0.2)
    }

    get roomsPricing() {
        var obj = {
            single: 50,
            double: 90,
            maisonette: 135,
        };
        return obj;
    }

    get servicePricing() {
        var obj = {
            food: 10,
            drink: 15,
            housekeeping: 25,
        };
        return obj;
    }

    rentARoom(clientName, roomType, nights) {
        if (roomType == 'single') {
            this.single--;
            let booking = {
                clientName: clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber,
            };
           let romm=this.currentBookingNumber;
            this.bookings.push(booking);
            this.currentBookingNumber++;
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${romm}.`;
        } else if (roomType == 'double') {
            this.double--;
            let booking = {
                clientName: clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber,

            };
            this.bookings.push(booking);
          let  romm=this.currentBookingNumber;
            this.currentBookingNumber++;
            
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${romm}.`
        
        } else if (roomType == 'maisonette') {
            this.single--;
            let booking = {
                clientName:clientName,
                roomType: roomType,
                nights: nights,
                roomNumber: this.currentBookingNumber,
            };
            this.bookings.push(booking);
          let  romm=this.currentBookingNumber;
            this.currentBookingNumber++
            return `Enjoy your time here Mr./Mrs. ${clientName}. Your booking is ${romm}.`
        }
        else
        return `No ${roomType} rooms available!` 
    }

    roomService(currentBookingNumber, serviceType){
        if(currentBookingNumber>this.currentBookingNumber){
            return `The booking ${currentBookingNumber} is invalid.`;
        }else if(serviceType!="drink"&&serviceType!="food"&&serviceType!="housekeeping"){
            return `We do not offer ${serviceType} service.`;
        }else{


return `Mr./Mrs. ${clientName}, Your order for ${serviceType} service has been successful.`;
        }
    }

    checkOut(currentBookingNumber){
        let totalMoney=0;
        
    }
    report(){
        return `${this.name.toUpperCase()} DATABASE:`,
        `--------------------`,
        this,bookins.forEach(element => {
            `bookingNumber – ${element.roomNumber}
            clientName – ${element.clientName}
            roomType – ${element.roomType}
            nights – ${element.nights}
            services – ${element.services}`
            
        });
        `----------`
      
        
    }
}


let hotel = new Hotel('HotUni', 10);

console.log(hotel.rentARoom('Peter', 'single', 4));
console.log(hotel.rentARoom('Robert', 'double', 4));
console.log(hotel.rentARoom('Geroge', 'maisonette', 6));


