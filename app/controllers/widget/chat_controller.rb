class Widget::ChatController < ApplicationController
  protect_from_forgery with: :null_session

  def reply
    user_message = params[:message].to_s.strip

    ai_answer = ChatGptService.new.ask(user_message)

    render json: { reply: ai_answer }
  end
end
