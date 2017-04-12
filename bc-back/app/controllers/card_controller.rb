class CardController < ApplicationController
  def jsontest
    time_test = ['9:00am', '9:30am', '10:00am', '10:30am', '11:00am', '11:30am', '12:00pm', '1:00pm', '1:30pm', '2:00pm', '2:30pm', '3:00pm', '3:30pm', '4:00pm']

    respond_to do |format|
      format.json { render(json: time_test) }
    end
  end
end
