class CreateProducts < ActiveRecord::Migration[6.0]
  def change
    create_table :products do |t|
      t.string :name
      t.string :description
      t.string :department
      t.float :price
      t.belongs_to :department, null: false, foreign_key: true

      t.timestamps
    end
  end
end
