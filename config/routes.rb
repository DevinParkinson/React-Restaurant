Rails.application.routes.draw do
  namespace :api do
    resources :menus
  end

  get '*other', to: 'static#index'
end
