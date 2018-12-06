class UsersController < ApplicationController

  def login
  end

  def logout
    sign_out_and_redirect(current_user)
  end

end