let app = new Vue({
	el: '#app',
	data: 
	{
		firstVerb: '',
		secondVerb: '',
		thirdVerb: '',
		firstNoun: '',
		fourthVerb: '',
		fifthVerb: '',
		firstAdj: '',
		secondNoun: '',
		thirdNoun: '',
		fourthNoun: '',
		fifthNoun: '',
		sixthNoun: '',
		sixthVerb: '',
		firstPlNoun: '',
		secondPlNoun: '',
		seventhNoun: '',
		seventhVerb: '',
		secondAdj: '',
		thirdAdj: '',
		eighthVerb: '',
		fourthAdj: '',
		eighthNoun: '',
		ninthVerb: '',
		ninthNoun: '',
		fifthAdj: '',
		filledOutFields: false,
		buttonClicked: false
	},

	methods:
	{
		checkIfAllSelected()
		{
			if (this.firstVerb === '')
			{
				return false;
			}
			if (this.secondVerb === '')
			{
				return false;
			}
			if (this.thirdVerb === '')
			{
				return false;
			}
			if (this.firstNoun === '')
			{
				return false;
			}
			if (this.fourthVerb === '')
			{
				return false;
			}
			if (this.fifthVerb === '')
			{
				return false;
			}
			if (this.firstAdj === '')
			{
				return false;
			}
			if (this.secondNoun === '')
			{
				return false;
			}
			if (this.thirdNoun === '')
			{
				return false;
			}
			if (this.fourthNoun === '')
			{
				return false;
			}
			if (this.fifthNoun === '')
			{
				return false;
			}
			if (this.sixthNoun === '')
			{
				return false;
			}
			if (this.sixthVerb === '')
			{
				return false;
			}
			if (this.firstPlNoun === '')
			{
				return false;
			}
			if (this.secondPlNoun === '')
			{
				return false;
			}
			if (this.seventhNoun === '')
			{
				return false;
			}
			if (this.seventhVerb === '')
			{
				return false;
			}
			if (this.secondAdj === '')
			{
				return false;
			}
			if (this.thirdAdj === '')
			{
				return false;
			}
			if (this.eighthVerb === '')
			{
				return false;
			}
			if (this.fourthAdj === '')
			{
				return false;
			}
			if (this.eighthNoun === '')
			{
				return false;
			}
			if (this.ninthVerb === '')
			{
				return false;
			}
			if (this.ninthNoun === '')
			{
				return false;
			}
			if (this.fifthAdj === '')
			{
				return false;
			}
			return true;
		},

		setButtonClicked()
		{
			this.buttonClicked = true;
		}
	},

	watch:
	{
		firstVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		secondVerb(value,oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		thirdVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		firstNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		fourthVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		fifthVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		firstAdj(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		secondNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		thirdNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		fourthNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		fifthNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		sixthNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		sixthVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		firstPlNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		secondPlNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		seventhNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		seventhVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		secondAdj(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		thirdAdj(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		eighthVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		fourthAdj(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		eighthNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		ninthVerb(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		ninthNoun(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
		fifthAdj(value, oldvalue)
		{
			this.filledOutFields = this.checkIfAllSelected();
		},
	},
})