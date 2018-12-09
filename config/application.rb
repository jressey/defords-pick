require_relative 'boot'

require 'rails/all'
require 'dotenv/load'

# Require the gems listed in Gemfile, including any gems
# you've limited to :test, :development, or :production.
Bundler.require(*Rails.groups)

if Rails.env != "production"
  Dotenv::Railtie.load
end

HOSTNAME = ENV['HOSTNAME']

module RubyBookmaker
  class Application < Rails::Application
    # Initialize configuration defaults for originally generated Rails version.
    config.load_defaults 5.1

    Rails.application.config.active_record.belongs_to_required_by_default = false
    # Settings in config/environments/* take precedence over those specified here.
    # Application configuration should go into files in config/initializers
    # -- all .rb files in that directory are automatically loaded.

    config.to_prepare do
      DeviseController.respond_to :html, :json
    end

    config.action_dispatch.default_headers = {
      'Access-Control-Allow-Origin' => 'http://localhost:3000/**',
      'Access-Control-Request-Method' => %w{GET POST OPTIONS}.join(",")
    }
  end
end
