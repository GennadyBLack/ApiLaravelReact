<?php

namespace App\Http\Controllers\Api;

use App\Category;
use Illuminate\Http\Request;
use App\Http\Controllers\Controller;

class CategoryController extends Controller
{
   
    public function index()
    {
      return  $result = Category::paginate(4);
    }

    public function create()
    {
        
    }

   
    public function store(Request $request)
    {
        $category = new Category();
        $category->name = $request->category_name;
        $category->save();

    }

    public function show($id)
    {
        
    }

   
    public function edit($id)
    {
        return Category::find($id);
    }

   
    public function update(Request $request, $id)
    {
        $category = Category::find($id);
        $category->name = $request->category_name;
        $category->save();

        return $category;
    }

  
    public function destroy($id)
    {
        Category::find($id)->delete();
    }
}
