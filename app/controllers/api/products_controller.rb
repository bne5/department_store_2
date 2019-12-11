class Api::ProductsController < ApplicationController
  before_action :set_department
  
  def index
    render json: @department.products
  end

  def show
  end

  def create
    product = @department.products.new(product_params)
    if product.save
      render json: product
    else
      render json: product.errors
    end
  end

  def update
  end

  def destroy
  end

  private
    def product_params
      params.require(:product).permit(:name, :description. :price)
    end

    def set_product
      @department = Department.find(params[:department_id])
    end

end
