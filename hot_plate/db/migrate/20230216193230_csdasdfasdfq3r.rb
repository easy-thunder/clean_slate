class Csdasdfasdfq3r < ActiveRecord::Migration[6.1]
  def change
    add_column :visit_items, :visit_id, :integer
    #Ex:- add_column("admin_users", "username", :string, :limit =>25, :after => "email")
  end
end
