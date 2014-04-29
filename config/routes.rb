BurningAirline::Application.routes.draw do
  get "home/index"
  devise_for :users

  root 'home#index'
  resources :airplanes
  resources :flights
  resources :reservations
  resources :seats
end
