(in-package :mu-cl-resources)

(define-resource doctor ()
  :class (s-prefix "schema:doctor")
  :properties `((:name :string ,(s-prefix "schema:name"))
                (:street :string ,(s-prefix "schema:street"))
                (:housenumber :integer ,(s-prefix "schema:integer"))
                (:postalcode :integer ,(s-prefix "schema:postalcode"))
                (:city :string ,(s-prefix "schema:city")))
  :has-one `((practice :via ,(s-prefix "schema:practice")
                       :as "practice"))
  :resource-base (s-url "http://mu.semte.ch/application/doctors")
  :on-path "doctors")

(define-resource practice ()
  :class (s-prefix "schema:practice")
  :properties `((:name :string ,(s-prefix "schema:practice"))
                (:street :string ,(s-prefix "schema:street"))
                (:housenumber :integer ,(s-prefix "schema:integer"))
                (:postalcode :integer ,(s-prefix "schema:postalcode"))
                (:city :string ,(s-prefix "schema:city"))
                (:type :string ,(s-prefix "schema:type")))
  :has-many `((doctor :via (s-prefix "schema:practice")
                      :inverse t
                      :as "doctors"))
  :resource-base (s-url "http://mu.semte.ch/application/practices")
  :on-path "practices")
