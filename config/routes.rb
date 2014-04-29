BurningAirline::Application.routes.draw do
  get "home/index"
  devise_for :users

  root :to => 'flights#landing'
  resources :airplanes
  resources :flights
  resources :reservations
  resources :seats
end
