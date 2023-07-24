(in-package :mu-cl-resources)

(in-package :mu-cl-resources)

(define-resource book ()
  :class (s-prefix "schema:Doctor")
  :properties `((:naam :string ,(s-prefix "schema:headline"))
                (:gemeente :string ,(s-prefix "schema:gemeente"))
                (:huisnr :integer ,(s-prefix "schema:huisnr"))
                (:postcode :integer ,(s-prefix "schema:postcode"))
                (:gemeente :string ,(s-prefix "schema:gemeente"))
                (:straat :string ,(s-prefix "schema:straat")))
  :resource-base (s-url "http://mu.semte.ch/services/github/madnificent/book-service/books/")
:on-path "doctors")
;; reading in the domain.json
(read-domain-file "domain.json")
