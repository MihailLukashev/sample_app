class TodosController < ApplicationController
  before_action :signed_in_user
  before_action :correcty_user,   only: [:destroy]

  def index
    @todo = Todo.new
    @todos = current_user.todos
  end


  def create
    @todo = current_user.todos.build(todo_params)
    @todo.update_attribute(:check, false)
    if @todo.save
      #flash[:success] = "Todo created"
      redirect_to todos_path
    end
    else
    #render todos_path
  end


  def edit

  end

  def update
    @todo = Todo.find_by_id(params[:id])
    @todo.update_attributes(todo_params)
    redirect_to todos_path
  end

  def update_all
    todos = current_user.todos
    todos.update_all( check: todos.where(check: false).any?)
    redirect_to todos_path
  end

  def destroy
    @todo.destroy
    redirect_to todos_path
  end

  def destroy_completed
    @todo = current_user.todos.where(check:true)
    @todo.destroy_all
    redirect_to todos_path
  end

  private

  def todo_params
    params.require(:todo).permit(:text, :check)
  end

  def correcty_user
    @todo = current_user.todos.find_by(id: params[:id])
    redirect_to todos_path if @todo.nil?
  end

end
