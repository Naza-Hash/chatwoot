module Widget
  class ChatController < ApplicationController
    protect_from_forgery with: :null_session

    def reply
      user_message = params[:message].to_s.strip

      begin
        ai_answer =
          if defined?(ChatGptService)
            ChatGptService.new.ask(user_message)
          else
            "AI service is not configured yet"
          end
      rescue => e
        Rails.logger.error("[ChatController] AI error: #{e.class} - #{e.message}")
        ai_answer = "Temporary AI error. Please try later."
      end

      render json: { reply: ai_answer }
    end
  end
end
