class Todo < ActiveRecord::Base
  belongs_to :user
  default_scope -> { order('created_at DESC') }
  validates :user_id, presence: true
  validates :text, presence: true, length: { in: 1..35 }
end
