R20130228Todox::Application.routes.draw do
  root :to => 'welcome#index'
  resources :users, :only => [:index, :new, :create]


  get '/login'  => 'session#new'
  post '/login' => 'session#create'
  delete '/login' => 'session#destroy'
  resources :priorities, :only => [:index, :create]
end
