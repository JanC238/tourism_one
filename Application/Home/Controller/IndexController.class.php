<?php
/**
 * Created by PhpStorm.
 * User: Jan
 * Date: 2017/2/14
 * Time: 11:18
 */

namespace Home\Controller;



class IndexController extends PublicController
{
    public function index()
    {
        //内容2左
        $homeContentTwoLeftModel = M('HomeContentTwoLeft');
        $homeContentTwoLeft = $homeContentTwoLeftModel->find(1);
        $this->assign('homeContentTwoLeft', $homeContentTwoLeft);
        //内容2右
        $homeContentTwoRightModel = M('HomeContentTwoRight');
        $homeContentTwoRight = $homeContentTwoRightModel->find(1);
        $this->assign('homeContentTwoRight', $homeContentTwoRight);
        //内容3
        $homeContentThreeModel = M('HomeContentThree');
        $homeContentThree = $homeContentThreeModel->find(1);
        $this->assign('homeContentThree', $homeContentThree);
        //内容4
        $homeContentFourModel = M('HomeContentFour');
        $homeContentFour = $homeContentFourModel->find(1);
        $this->assign('homeContentFour', $homeContentFour);
        //内容5
        $homeContentFiveModel = M('HomeContentFive');
        $homeContentFive = $homeContentFiveModel->find(1);
        $this->assign('homeContentFive', $homeContentFive);
        //内容6
        $homeContentSixModel = M("HomeContentSix");
        $homeContentSix = $homeContentSixModel->find(1);
        $this->assign('homeContentSix', $homeContentSix);
        //内容7
        $homeContentSevenModel = M('HomeContentSeven');
        $homeContentSeven = $homeContentSevenModel->find(1);
        $this->assign('homeContentSeven', $homeContentSeven);
        //品牌图片
        $brandImgsModel = M('BrandImg');
        $brandImgs = $brandImgsModel->select();
        $this->assign('brandImgs', $brandImgs);
        //首页酒店
        $hotelModel = M('Hotel');
        $hotels = $hotelModel->where(['status' => 1])->select();
        $this->assign('hotels', $hotels);
        //news
        $newsModel = M('News');
        $news = $newsModel->order('time desc')->limit(5)->select();
        $this->assign('newses', $news);
        $this->display('HomeContent:index');
    }
}