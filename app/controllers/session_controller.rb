class SessionController < ApplicationController
  def new
  end

  def create
    user = User.where(:email => params[:email]).first
    if user.present? && user.authenticate(params[:password]) #user and password match
      session[:user_id] = user.id #create the hash session, and set the userid to the userid of the user from the table.
      redirect_to(root_path)      # ^ you can store whatever the EFF you want in here, but it's best to keep it lean.
    else
      flash[:notice] = 'You fucked up, yo'
      redirect_to(login_path)
    end
  end

  def destroy
    session[:user_id] = nil
    redirect_to(root_path)
  end
end