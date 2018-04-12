defmodule CcmonitorWeb.Router do
  use CcmonitorWeb, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/", CcmonitorWeb do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
    get "/coin/:type", PageController, :index
    get "/alertform", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api/v1", CcmonitorWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
    resources "/messages", MessageController, except: [:new, :edit]
    resources "/alerts", AlertController, except: [:new, :edit]
    post "/token", TokenController, :create
  end
end
