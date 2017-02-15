/**
 * Created by Administrator on 2016/5/31.
 */
var demo;

function initImageUpload(config) {
    $(config.el).html('<button type="button" @click="opendialog" :class="style.openbtn">选择图片</button><div class="mask" v-show="show"><div class="modal-panel"><div class="modal-header"><div class="modal-title">上传图片</div><div class="modal-close"><button @click="close" type="button"><i class="fa fa-times"></i></button></div></div><div class="modal-body"><ul class="switch-header"><li @click="switchto(1)" v-if="features.httpimg">图片上传</li><li @click="switchto(2)" v-if="features.uploadimg">插入图片</li><li @click="switchto(3)" v-if="features.onlineimg">在线图片</li></ul><div class="content"><div v-if="state===1"><div class="onlineimg"><div class="form-row address-row"><label for="url">地址:</label><input id="url" type="text" v-model="httpimg" placeholder="请输入在线地址"></div><div class="form-row"><div class="priview"><img :src="httpimg" v-if="httpimg" alt=""></div></div></div></div><div v-if="state===2" class="uploadimg"><div class="panel"><div class="uploadbtn" v-if="!img"><input type="file" id="fileinput" accept="image/*" hidden @change="imgselect"><button @click="openfileselect" type="button">上传图片</button><div class="progress" v-show="uploadstate"><div class="progress-bar"></div></div></div><img v-else :src="img|imgurl" alt=""></div></div><div v-if="state===3"><ul class="online-img-list"><li class="online-img-item" v-for="item in onlineimg"><div :class="[\'item-img\',{selected:selectids.indexOf($index)!==-1}]" @click="selectid($index)"><img :src="item.img|imgurl" alt=""></div></li></ul></div></div></div><div class="modal-footer"><button :class="style.savebtn" style="margin-top:0px;" type="button" @click="save">确定</button><button :class="style.canclebtn" type="button" @click="cancel">取消</button></div></div></div>')
    demo = new Vue({
        el: config.el,
        data: {
            state: 1,
            uploadstate: false,
            img: '',
            httpimg:'',
            show: false,
            onlineimg: [],
            selectids: [],
            onlinemultselect: false,
            style:{},
            imginfo:{},
            features:{
                httpimg:true,
                uploadimg:true,
                onlineimg:true
            }
        },
        methods: {
            switchto: function(state) {
                this.state = state
            },
            openfileselect: function(event) {
                $('#fileinput').click()
                event.stopPropagation()
            },
            imgselect: function() {
                console.log('234')
                this.uploadstate = true
                var self = this
                ajaxUpload({ img: $('#fileinput')[0].files[0] }, config.uploadpath, function(data) {
                    console.log(data)
                    self.uploadstate = false
                    self.img = data.img
                    self.imginfo = {id:data.id,title:data.title}
                }, function(error) {

                }, function(state) {
                    $('.progress .progress-bar').css('width', (state.loaded / state.total) * 100 + '%')
                })
            },
            save: function() {
                if(this.uploadstate){
                    alert('正在上传中')
                    return
                }
                var self = this
                if(this.state===1){
                    config.save({type:2,img:[{img:this.httpimg}]})
                }
                if(this.state===2){
                    config.save({type:1,img:[{img:this.img,id:self.imginfo.id,title:self.imginfo.title}]})
                }
                if(this.state===3){
                    var imgstr = []
                    this.selectids.forEach(function(v) {
                        imgstr.push(self.onlineimg[v])
                    })
                    config.save({type:1,img:imgstr})
                }
                this.close()
            },
            opendialog: function() {
                this.show = true
            },
            close: function() {
                this.show = false
            },
            selectid: function(id) {
                var index = this.selectids.indexOf(id)
                if (this.onlinemultselect) {
                    if (index === -1) {
                        this.selectids.push(id)
                    } else {
                        this.selectids.splice(index, 1)
                    }
                }else{
                    this.selectids = [id]
                }
            },
            cancel:function(){
                this.uploadstate=false
                this.img= ''
                this.selectids= []
                this.close()
            }
        },
        created: function() {
            this.style = config.style
        	this.onlinemultselect = config.onlinemultselect
            var self = this
            $.ajax({
                url: config.onlineimgurl,
                success: function(result) {
                    var objs = JSON.parse(result)
                    console.log(objs)
                    self.onlineimg = objs.list
                }
            })
            if(config.features){
                this.features = config.features
                if(config.features.onlineimg){
                    this.state = 3
                }
                if(config.features.uploadimg){
                    this.state = 2
                    
                }
                if(config.features.httpimg){
                    this.state = 1
                    
                }
            }
            Vue.filter('imgurl',function(val){
                return config.imgurl+val
            })
        }
    })
}
