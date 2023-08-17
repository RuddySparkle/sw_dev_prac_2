class SportStore {
    constructor() {
        this.form = document.querySelector('form');
        this.companyNameInput = document.getElementById('companyName');
        this.boothSizeInput = document.getElementById('boothSize');
        this.includeTableInput = document.getElementById('includeTable');
        this.amountOfChairsInput = document.getElementById('amountOfChairs');
        this.contactPersonInput = document.getElementById('contactPerson');
        this.phoneNumberInput = document.getElementById('phoneNumber');
        
        this.form.addEventListener('submit', this.handleSubmit.bind(this));
    }
  
    handleSubmit(event) {
        event.preventDefault();
      
        if (this.companyNameInput.value.trim() === '') {
            this.showAlertBlank(this.companyNameInput);
        }
        else if (this.contactPersonInput.value.trim() === '') {
            this.showAlertBlank(this.contactPersonInput);
        } 
        else if (this.phoneNumberInput.value.trim() === '') {
            this.showAlertBlank(this.phoneNumberInput);
        } 
        else {
            console.log('New Store Registered: '+ this.companyNameInput.value);
            this.form.submit();
        }
    }
  
    showAlertBlank(inputElement) {
        alert('Please fill out all required fields.');
    }

}

document.addEventListener = function() {
    const sportStore = new SportStore();
};