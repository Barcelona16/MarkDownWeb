
test("Test setReadonly", function() {
          QUnit.equal($("#introduce").attr("readonly"), "readonly", "introduce readonly ");
          QUnit.equal($("#labList").attr("readonly"), "readonly", "lab readonly ");
          QUnit.equal($("#personBlog").attr("readonly"), "readonly", "personBlog readonly ");
          QUnit.equal($("#lab").attr("readonly"), "readonly", "grade readonly ");
          QUnit.equal($("#teacherNumber").attr("readonly"), "readonly", "studentNumber readonly ");
          QUnit.equal($("#name").attr("readonly"), "readonly", "name readonly ");
          QUnit.equal($("#email").attr("readonly"), "readonly", "email readonly ");
        });