class SessionsController < ApplicationController

  def new
  end

  def show
  end

  def create
    user = User.find_by_email(params[:email])
    if user && user.authenticate(params[:password])
      session[:user_id] = user.id
      redirect_to '/answers'
    else

      redirect_to '/login'
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to '/login'

  end

  # def admin
  #   user = User.find_by_admin(params[:user_type])
  #   if user && user.authenticate(params[:password])
  #     session[:user_id] = user.id
  #     redirect_to '/answers'
  #   else
  #
  #     redirect_to '/login'
  #   end

end
