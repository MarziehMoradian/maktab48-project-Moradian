import React from "react";
	import {DatePicker, DateTimePicker, DateRangePicker, DateTimeRangePicker} from "react-advance-jalaali-datepicker";
    export class Home extends React.component {
		change(unix, formatted){
		    console.log(unix) // returns timestamp of the selected value, for example.
            console.log(formatted) // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
		}
		DatePickerInput(props) {
			return <input className="popo" {...props} ></input>;
		}
		render() {
		    return (
		      <div className="datePicker">
				<DatePicker
					inputComponent={this.DatePickerInput}
					placeholder="انتخاب تاریخ"
					format="jYYYY/jMM/jDD"
					onChange={this.change}
					id="datePicker"
					preSelected="1396/05/15"
                    
				/>
				{/* <DateTimePicker
					placeholder="انتخاب تاریخ و ساعت"
					format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
					id="dateTimePicker"
					onChange={this.changeTimeDate}
					preSelected="تاریخ: 1396/02/24 ساعت: 18:30"
					/>
				<DateRangePicker
					placeholderStart="تاریخ شروع"
					placeholderEnd="تاریخ پایان"
					format="jYYYY/jMM/jDD"
					onChangeStart={this.change}
					onChangeEnd={this.changeTimeDate}
					idStart="rangePickerStart"
					idEnd="rangePickerEnd"
					/>
				<DateTimeRangePicker
					placeholderStart="تاریخ و ساعت شروع"
					placeholderEnd="تاریخ و ساعت پایان"
					format="تاریخ: jYYYY/jMM/jDD ساعت: HH:mm"
					onChangeStart={this.change}
					onChangeEnd={this.changeTimeDate}
					idStart="rangePickerStart"
					idEnd="rangePickerEnd" /> */}
		      </div>
			)
		}
    }
	
export default Home

    